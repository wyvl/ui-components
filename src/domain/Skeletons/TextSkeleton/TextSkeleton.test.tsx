import React from 'react'
import { mount } from 'enzyme'
import { TextSkeleton } from './TextSkeleton'
import { Props } from '../../../common'

describe('<TextSkeleton />', () => {
  it('should render a text skeleton', () => {
    const wrapper = mount(
      <TextSkeleton
        showSkeleton
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a text skeleton with set width', () => {
    const wrapper = mount(
      <TextSkeleton
        showSkeleton
        width={250}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a text skeleton with set type', () => {
    const wrapper = mount(
      <TextSkeleton
        showSkeleton
        type={Props.TypographyType.display}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a multi line text skeleton', () => {
    const wrapper = mount(
      <TextSkeleton
        showSkeleton
        numLines={5}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
