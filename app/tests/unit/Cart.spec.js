import { shallowMount } from '@vue/test-utils'

import Cart from '../../src/pages/cart'

describe('Cart component', () => {

  it('should get total price when render cart component', () => {
    // given
    const products = [
      { code: 'one', price: 100, amount: 2 },
      { code: 'two', price: 200, amount: 1 },
    ]

    // when
    const wrapper = shallowMount(Cart)
    wrapper.setData({ cartProducts: products })

    // then
    expect(wrapper.find('.title').text()).toEqual('总价 400')
  })

})
