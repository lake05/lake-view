import { defineComponent, PropType } from 'vue'
import { Schema, SchemaType } from './types'

export default defineComponent({
  name: 'SchemaForm',
  props: {
    schemas: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: unknown) => void>,
      required: true,
    },
  },
  setup(props, { slots }) {
    return () => {
      const schema = props.schemas
      const type = schema?.type

      switch (type) {
        case SchemaType.STRING:
          return <input type="text" />

        default:
          break
      }

      return <div>this is form</div>
    }
  },
})
