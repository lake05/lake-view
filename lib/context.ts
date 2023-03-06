import { DefineComponent, InjectionKey } from 'vue'
import { FieldPropsDefine } from './types'

export const SchemaFormContextKey = Symbol() as InjectionKey<{
  SchemaItem: DefineComponent<typeof FieldPropsDefine>
}>
