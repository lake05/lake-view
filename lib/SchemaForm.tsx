import { defineComponent, PropType, provide } from 'vue'
import { SchemaFormContextKey } from './context'
import Ajv, { Options } from 'ajv'

import SchemaItem from './SchemaItem'
import { CommonFieldType, Schema } from './types'

export interface SchemaFormRef {
  doValidate: () => {
    errors: unknown[]
    valid: boolean
  }
}

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
    ajvOptions: {},
  },
  setup(props, { expose }) {
    const handleChange = (v: unknown) => {
      console.log('v: ', v)
      props.onChange && props.onChange(v)
    }

    const context = {
      SchemaItem: SchemaItem as CommonFieldType,
    }

    provide(SchemaFormContextKey, context)

    const defaultAjvOptions: Options = {
      allErrors: true,
    }

    // const validator = new Ajv({ ...defaultAjvOptions, ...props.ajvOptions })

    const exposeContext: SchemaFormRef = {
      doValidate: () => {
        return {
          valid: true,
          errors: [],
        }
      },
    }

    expose(exposeContext)

    return () => {
      const { schema, value } = props

      return (
        <SchemaItem
          schema={schema}
          rootSchema={schema}
          value={value}
          onChange={handleChange}
        />
      )
    }
  },
})
