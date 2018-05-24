import { shallow } from 'enzyme'
import React from 'react'
import { lineObject, lineObject2, lineObject3 } from './sampleData'
import { TimeBasedLineChart } from './'

describe('<TimeBasedLineChart />', () => {
  it('Renders the TimeBasedLineChart with gradient', () => {
    const wrapper = shallow(<TimeBasedLineChart
      data={[lineObject]}
      maxYTick={10}
      yTickStepSize={1}
      timeToolTipFormat='ll'
      timeUnit='month'
      timeDisplayFormat='MMM'
      dateFormat='DD/MM/YYYY'
    />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Renders the TimeBasedLineChart with 2 lines and without gradient', () => {
    const wrapper = shallow(<TimeBasedLineChart
      data={[lineObject2, lineObject3]}
      maxYTick={300}
      yTickStepSize={20}
      timeToolTipFormat='ll'
      timeUnit='month'
      timeDisplayFormat='MMM'
      dateFormat='DD/MM/YYYY'
    />)

    expect(wrapper).toMatchSnapshot()
  })

  it('Renders the TimeBasedLineChart with axis labels', () => {
    const wrapper = shallow(<TimeBasedLineChart
      data={[lineObject]}
      maxYTick={10}
      yTickStepSize={1}
      timeToolTipFormat='ll'
      timeUnit='month'
      timeDisplayFormat='MMM'
      dateFormat='DD/MM/YYYY'
      yAxisLabel='Value'
      showYAxisLabel={true}
      xAxisLabel='Date'
      showXAxisLabel={true}
    />)

    expect(wrapper).toMatchSnapshot()
  })
})
