import { CommonWidgetPropsDefine } from '../types'
import { defineComponent } from 'vue'

const NumberWidget = defineComponent({
  props: CommonWidgetPropsDefine,
  setup(props) {
    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement

      props.onChange(target.value)
    }
    return () => {
      return (
        <input
          class="border border-gray-500"
          type="number"
          value={props.value}
          onInput={handleChange}
        />
      )
    }
  },
})

export default NumberWidget
