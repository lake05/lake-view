import { defineComponent, PropType } from 'vue'
import { Schema, SchemaTypes } from './types'

import SchemaItem from './SchemaItem'

export default defineComponent({
  name: 'SchemaForm',
  props: {
    schema: {
      type: Object as PropType<Schema | null>,
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
      props.onChange(v)
    }

    return () => {
      const { schema, value } = props

      return (
        <SchemaItem schema={schema!} value={value} onChange={handleChange} />
      )
    }
  },
})
