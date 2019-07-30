import { shallowMount } from '@vue/test-utils'

export default (component) => {
  it('check if any Tubaina tag leaked to final version', () => {
    const wrapper = shallowMount(component, {
      propsData: {},
      stubs: {
        Bib: true,
        Bio: true,
        Box: true,
        ChapterQuote: true,
        Index: true,
        Page: true,
        RouterLink: true,
      }
    })
    const lines = wrapper.text().split('\n')
    lines.map((line) => {
      expect(line).not.toMatch(/(::|\*\*|%%|\[label|\[code|\[section|\[box|\[index|\[ref)/)
    })
  })
}
