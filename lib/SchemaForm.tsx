import {
  defineComponent,
  PropType,
  provide,
  shallowRef,
  watchEffect,
} from 'vue'
import { SchemaFormContextKey } from './context'
import Ajv, { Options } from 'ajv'

import SchemaItem from './SchemaItem'
import { CommonFieldType, Schema, Language } from './types'
import { ErrorSchema, validateFormData } from './validator'

export interface SchemaFormRef {
  doValidate: () => {
    errors: unknown[]
    valid: boolean
  }
}

const defaultAjvOptions: Options = {
  allErrors: true,
}

export type CustomValid = (data: any, errors: any) => void

export default defineComponent({
  name: 'SchemaForm',
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    // eslint-disable-next-line vue/require-prop-types
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: unknown) => void>,
      required: true,
    },
    ajvOptions: {
      type: Object as PropType<Options>,
      default: null,
    },
    locale: {
      type: String as PropType<Language>,
      default: 'zh',
    },
    customValidata: {
      type: Function as PropType<CustomValid>,
      default: null,
    },
  },
  setup(props, { expose }) {
    const handleChange = (v: unknown) => {
      props.onChange && props.onChange(v)
    }

    const context = {
      SchemaItem: SchemaItem as CommonFieldType,
    }

    provide(SchemaFormContextKey, context)

    const validateRef = shallowRef<Ajv>()

    watchEffect(() => {
      validateRef.value = new Ajv({ ...defaultAjvOptions, ...props.ajvOptions })
    })

    const errorSchemaRef = shallowRef<ErrorSchema>({})

    const exposeContext: SchemaFormRef = {
      doValidate: () => {
        const ajv = validateRef.value!

        const result = validateFormData(
          ajv,
          props.value,
          props.schema,
          props.locale,
          props.customValidata,
        )
        errorSchemaRef.value = result.errorSchema
        return result
      },
    }

    expose(exposeContext)

    return () => {
      const { schema, value } = props

      return (
        <SchemaItem
          errorSchema={errorSchemaRef.value}
          schema={schema}
          rootSchema={schema}
          value={value}
          onChange={handleChange}
        />
      )
    }
  },
})
