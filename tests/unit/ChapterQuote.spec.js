import { shallowMount } from '@vue/test-utils'
import ChapterQuote from '@/components/ChapterQuote.vue'

const quote = "Na passadeira de peões surgiu o desenho do homem verde.";
const author = 'José Saramago';
const work = 'Ensaio sobre a Cegueira';

describe('ChapterQuote.vue', () => {
  it('check the quote with author and work', () => {
    const wrapper = shallowMount(ChapterQuote, {
      propsData: {author: author,
                  work: work},
      slots: {
        default: [quote]
      },
      directives: {
        title: {}
      }
    })
    expect(wrapper.text()).toMatch(`${quote} ${author} ${work}`)
  });

  it('check the quote with author', () => {
    const wrapper = shallowMount(ChapterQuote, {
      propsData: {author: author},
      slots: {
        default: [quote]
      },
      directives: {
        title: {}
      }
    })
    expect(wrapper.text()).toMatch(`${quote} ${author}`)
  })
})
