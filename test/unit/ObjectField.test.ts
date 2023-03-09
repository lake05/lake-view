import { render, screen } from '@testing-library/vue'
import ObjectField from 'lib/fields/ObjectField'
import { Schema } from 'lib/types'

describe('ObjectField', () => {
  let schema: Schema
  beforeEach(() => {
    schema = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        age: {
          type: 'number',
        },
      },
    }
  })
  test('should render properties to correct fields', () => {
    // render(ObjectField, {
    //   props: {
    //     schema: schema,
    //     value: {},
    //     onChange: () => {},
    //   },
    // })
    // console.log('screen.getByText: ', screen.getByText)
    // expect(screen.getByText('Times clicked: 0')).toBeTruthy()
  })
})
