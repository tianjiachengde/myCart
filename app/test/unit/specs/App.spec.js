import Vue from 'vue'
import App from '@/App'
import { mount, shallowMount } from '@vue/test-utils'

describe('App.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.title').textContent)
      .toEqual('总价 0')
  })
})
