import { defineComponent, PropType, computed } from 'vue'
import { Schema, SchemaTypes } from './types'

import StringField from './fields/StringField.vue'
import NumberField from './fields/NumberField.vue'
import { retrieveSchema } from './utils'

export default defineComponent({
  name: 'SchemaItem',
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
    // const retrievedSchemaRef = computed(() => {
    //   const { schema, rootSchema, value } = props
    //   return retrieveSchema(schema, rootSchema, value)
    // })

    return () => {
      // const { schema, rootSchema, value } = props

      const type = props.schema?.type
      // TODO: 如果type没有指定 我们需要猜测这个type

      let Component

      switch (type) {
        case SchemaTypes.STRING:
          Component = StringField
          break
        case SchemaTypes.NUMBER:
          Component = NumberField
          break
        default:
          break
      }

      return Component ? <Component {...props} /> : null
    }
  },
})
