import Ajv from 'ajv'
import localize from 'ajv-i18n'

const ajv = new Ajv({ allErrors: true }) // options can be passed, e.g. {allErrors: true}

const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string' },
  },
  required: ['foo'],
  additionalProperties: false,
}

const validate = ajv.compile(schema)

const data = {
  foo: 1,
  bar: 'abc',
  a: 11,
}

const valid = validate(data)
localize.zh(validate.errors)
if (!valid) console.log(validate.errors)
