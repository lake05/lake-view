import { markRaw } from 'vue'
import SelectionWidget from '../widgets/Selection'
import TextWidget from './TextWidget'
import NumWidget from './NumWidget'

import { CommonWidgetDefine, Theme } from '../types'

const theme: Theme = {
  widgets: {
    SelectionWidget: markRaw(SelectionWidget),
    NumberWidget: markRaw(NumWidget as CommonWidgetDefine),
    TextWidget: markRaw(TextWidget as CommonWidgetDefine),
  },
}

export default theme
