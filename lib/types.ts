export enum SchemaType {
  'NUMBER' = 'number',
  'INTEGER' = 'integer',
  'STRING' = 'string',
  'OBJECT' = 'object',
  'ARRAY' = 'array',
  'BOOLEAN' = 'boolean',
}

type SchemaRef = { $ref: string }

export interface Schema {
  type: SchemaType | string
  const?: unknown
  format?: string
  default?: unknown
  properties?: {
    [key: string]: Schema | SchemaRef
  }
  items?: Schema | Schema[] | SchemaRef
  dependencies?: {
    [key: string]: string[] | Schema | SchemaRef
  }
  oneOf?: Schema[]
  required?: string[]
  enum?: unknown[]
  enumKeyValue?: unknown[]
  additionalProperties?: unknown
  additionalItems?: Schema
}
