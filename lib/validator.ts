import Ajv, { ErrorObject } from 'ajv'
import localize from 'ajv-i18n'
import { toPath } from './utils'
import { Language, Schema } from './types'
import { CustomValid } from './SchemaForm'

interface TransformErrorsObject {
  name: string
  property: string
  message?: string
  params: Record<string, any>
  schemaPath: string
}

export type ErrorSchema = {
  [level: string]: ErrorSchema
} & { __errors?: string[] }

function toErrorChema(errors: TransformErrorsObject[]) {
  if (errors.length < 1) return {}

  return errors.reduce((errorSchema, error) => {
    const { property, message } = error
    const path = toPath(property)

    let parent = errorSchema

    // if path is at the root '/src/...'
    if (path.length > 0 && path[0] === '') {
      path.splice(0, 1)
    }

    for (const segment of path.slice(0)) {
      if (!(segment in parent)) {
        ;(parent[segment] as any) = {}
      }
      parent = parent[segment]
    }

    if (Array.isArray(parent.__errors)) {
      parent.__errors = parent.__errors.concat(message || '')
    } else {
      if (message) {
        parent.__errors = [message]
      }
    }
    return errorSchema
  }, {} as ErrorSchema)
}

function transformErrors(
  errors: ErrorObject[] | null | undefined,
): TransformErrorsObject[] {
  if (errors === null || errors === undefined) return []

  return errors.map(
    ({ message, schemaPath, keyword, params, instancePath }) => {
      return {
        name: keyword,
        property: instancePath,
        message,
        params,
        schemaPath,
      }
    },
  )
}

export function validateFormData(
  validator: Ajv,
  formData: unknown,
  schema: Schema,
  locale: Language = 'zh',
  customValidata?: CustomValid,
) {
  let validationError = null
  try {
    validator.validate(schema, formData)
  } catch (error) {
    validationError = error as Error
  }
  localize[locale](validator.errors)
  let errors = transformErrors(validator.errors)

  if (validationError) {
    errors = [
      ...errors,
      {
        message: validationError.message,
      } as TransformErrorsObject,
    ]
  }

  const errorSchema = toErrorChema(errors)

  if (!customValidata) {
    return {
      errors,
      errorSchema,
      valid: errors.length === 0,
    }
  }

  /**
   * {
   *  obj: {
   *    a: {b: {__error: ''}}
   *  }
   * }
   */

  customValidata(formData, errorSchema)
}

function createErrorProxy() {
  const raw = {}
  return new Proxy(raw, {
    get(target, key, receiver) {
      if (key === 'addError') {
        return () => {}
      }
      const res = Reflect.get(target, key, receiver)
      if (res === undefined) {
        const p = createErrorProxy()
        res[key] = p
        return p
      }
      return res
    },
  })
}
