import { defineComponent, PropType, provide } from 'vue'
import { SchemaFormContextKey } from './context'

import SchemaItem from './SchemaItem'
import { Schema } from './types'

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
  },
  setup(props) {
    const handleChange = (v: unknown) => {
      props.onChange && props.onChange(v)
    }

    const context = {
      SchemaItem,
    }

    provide(SchemaFormContextKey, context)

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
