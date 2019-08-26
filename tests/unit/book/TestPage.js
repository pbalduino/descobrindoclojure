import { shallowMount } from '@vue/test-utils'

export default (component) => {
  it('check if any Tubaina tag leaked to final version', () => {
    const wrapper = shallowMount(component, {
      propsData: {},
      stubs: {
        Bib: true,
        Box: true,
        ChapterQuote: true,
        Comment: true,
        Index: true,
        Page: true,
        RefLabel: true,
        RouterLink: true,
        Snippet: true,
        Wip: true,
      }
    })
    const lines = wrapper.text().split('\n')
    lines.map((line) => {
      expect(line).not.toMatch(/(::|\*\*|%%|\[label|\[code|\[section|\[box|\[index|\[ref|\[quote|\[img|\[title)/)
    })
  })
}
