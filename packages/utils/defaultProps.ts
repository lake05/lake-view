import { mapValues } from 'lodash-es'
import { CommonComponentProps } from '~/types'

export const commonDefaultProps: CommonComponentProps = {
  actionType: '',
  url: '',
  // size
  height: '',
  width: '318px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border types
  borderStyle: '',
  borderColor: '',
  borderWidth: '',
  borderRadius: '',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: '1',
  // position and x,y
  position: 'relative',
  left: '0px',
  top: '0px',
  right: '0px',
}

export function transformToComponentProps<T extends object>(props: T) {
  return mapValues(props, (item: T[keyof T]) => {
    return {
      type: (item as object).constructor as StringConstructor,
      default: item,
    }
  })
}
