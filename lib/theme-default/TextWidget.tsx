import { CommonWidgetPropsDefine } from '../types'
import { defineComponent } from 'vue'

const TextWidget = defineComponent({
  props: CommonWidgetPropsDefine,
  setup(props) {
    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      const value = target.value
      target.value = props.value as string
      props.onChange(value)
    }
    return () => {
      return (
        <input
          class="border border-gray-500"
          type="text"
          value={props.value}
          onInput={handleChange}
        />
      )
    }
  },
})

export default TextWidget
