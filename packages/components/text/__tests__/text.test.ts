import { mount } from '@vue/test-utils'
import Text from '../Text.vue'

describe('Text.vue', () => {
  test('default Text render', () => {
    const msg = 'test message'
    const wrapper = mount(Text, {
      props: {
        text: msg,
      },
    })

    // should have the right text
    expect(wrapper.text()).toBe(msg)
    // should be default div tag
    expect(wrapper.element.tagName).toBe('DIV')
    // should have certain css attr
    const style = wrapper.attributes().style
    expect(style.includes('font-size')).toBeTruthy()
    // should not have props has been filtered
    expect(style.includes('actionType')).toBeFalsy()
  })
  test('should trigger location change while Text with actionType and url', async () => {
    const url = 'http://dummy.url/'
    const wrapper = mount(Text, {
      props: {
        actionType: 'url',
        url,
        tag: 'h2',
      },
    })
    expect(wrapper.element.tagName).toBe('H2')
    await wrapper.trigger('click')
    expect(window.location.href).toBe(url)
  })
  test.skip('should no trigger location change while Text with isEditing', async () => {
    const url = 'http://dummy.url/'
    const wrapper = mount(Text, {
      props: {
        actionType: 'url',
        url,
      },
    })
    await wrapper.trigger('click')
    expect(window.location.href).not.toBe(url)
  })
})
