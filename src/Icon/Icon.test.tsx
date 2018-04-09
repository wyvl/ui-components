import { mount } from 'enzyme'
import React from 'react'

import { Icon } from '../Icon'

describe('<Icon />', () => {
  it(`should render icon with no size or colour`, () => {
    const wrapper = mount(
      <Icon
        type='check'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render icon with size`, () => {
    const wrapper = mount(
      <Icon
        type='check'
        size={3}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render icon with stack and size`, () => {
    const wrapper = mount(
      <Icon
        type='check'
        size={2}
        isStacked
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render icon with no stack or size if only isStacked is given`, () => {
    const wrapper = mount(
      <Icon
        type='check'
        isStacked
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a large icon`, () => {
    const wrapper = mount(
      <Icon
        type='check'
        isLarge
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render icon with colour`, () => {
    const wrapper = mount(
      <Icon
        type='check'
        color='#1A2B3C'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a non-FontAwesome icon`, () => {
    const wrapper = mount(
      <Icon
        type='intelli-icon-avatar'
        isFontAwesome={false}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
