import { shallowMount } from '@vue/test-utils'
import Version from '@/components/Version.vue'

describe('Version.vue', () => {
  it('check if the version is something valid', () => {
    const wrapper = shallowMount(Version, {
      propsData: {}
    })
    expect(wrapper.text()).toMatch(/Versão: [0-9a-f]{7}/)
    expect(wrapper.text()).not.toMatch(/(::|\*\*|%%)/)
  })
})
