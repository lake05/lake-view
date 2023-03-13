import { CommonWidgetNames, FieldPropsDefine } from '../types'
import { defineComponent } from 'vue'
import { getWidget } from 'lib/theme'

export default defineComponent({
  props: FieldPropsDefine,
  setup(props) {
    const TextWidthRef = getWidget(CommonWidgetNames.TextWidget)
    const handleChange = (e: unknown) => {
      props.onChange(e)
    }
    return () => {
      const TextWidth = TextWidthRef.value
      return <TextWidth value={props.value} onChange={handleChange} />
    }
  },
})
