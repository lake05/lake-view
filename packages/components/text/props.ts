import { without } from 'lodash-es'
import { TextComponentProps } from '~/types/text'
import {
  commonDefaultProps,
  transformToComponentProps,
} from '~/utils/defaultProps'

export const textDefaultProps: TextComponentProps = {
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps,
}

export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  'actionType',
  'url',
  'text',
)

export const textProps = {
  tag: {
    type: String,
    default: 'div',
  },
  ...transformToComponentProps<TextComponentProps>(textDefaultProps),
}
