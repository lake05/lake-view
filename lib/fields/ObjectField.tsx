import { SchemaFormContextKey } from '..//context'
import { defineComponent, inject } from 'vue'
import { FieldPropsDefine } from '../types'
import { isObject } from '../utils'

export default defineComponent({
  name: 'ObjectField',
  props: FieldPropsDefine,
  setup(props) {
    const context = inject(SchemaFormContextKey)

    if (!context) {
      throw new Error('SchemaForm should be  used')
    }

    const handleObjectFieldChange = (key: string, v: unknown) => {
      const value = isObject(props.value) ? props.value : {}

      if (v === undefined) {
        delete value.key
      } else {
        value[key] = v
      }

      props.onChange(value)
    }

    return () => {
      const { schema, rootSchema, value } = props
      const properties = schema.properties || {}
      const { SchemaItem } = context

      const currentValue = isObject(value) ? value : {}
      return Object.keys(properties).map((k: string, index: number) => (
        <SchemaItem
          schema={properties[k]}
          rootSchema={rootSchema}
          value={currentValue[k]}
          key={index}
          onChange={(v) => handleObjectFieldChange(k, v)}
        />
      ))
    }
  },
})
