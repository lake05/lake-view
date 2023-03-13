import { CommonWidgetNames, FieldPropsDefine } from '../types'
import { defineComponent } from 'vue'
import { getWidget } from 'lib/theme'

export default defineComponent({
  props: FieldPropsDefine,
  setup(props) {
    const NumWidthRef = getWidget(CommonWidgetNames.NumberWidget)
    const handleChange = (e: unknown) => {
      const num = Number(e)
      if (Number.isNaN(num)) {
        props.onChange(undefined)
      } else {
        props.onChange(num)
      }
    }
    return () => {
      const NumWidth = NumWidthRef.value
      return <NumWidth value={props.value} onChange={handleChange} />
    }
  },
})
