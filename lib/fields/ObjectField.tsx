import { SchemaFormContextKey } from '..//context'
import { defineComponent, inject } from 'vue'
import { FieldPropsDefine } from '../types'

export default defineComponent({
  name: 'ObjectField',
  props: FieldPropsDefine,
  setup() {
    const context = inject(SchemaFormContextKey)
    console.log('context: ', context)

    return () => <div>Object Field</div>
  },
})
