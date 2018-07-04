import React from 'react'
import { mount } from 'enzyme'
import { DataTable } from './DataTable'

describe('<DataTable />', () => {
  describe('Basic DataTable', () => {
    const wrapper = mount(
      <DataTable
        data={[
          {
            name: 'Tanner Linsley',
            age: 26
          },
          {
            name: 'Jason Maurer',
            age: 23
          }
        ]}
        columns={[
          {
            Header: 'Name',
            accessor: 'name'
          },
          {
            Header: 'Age',
            accessor: 'age'
          }
        ]}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should contain the data', () => {
      expect(wrapper.contains('Tanner Linsley')).toBeTruthy()
      expect(wrapper.contains('Jason Maurer')).toBeTruthy()
    })

    it('should not be paginated', () => {
      expect(wrapper.find('.-pagination').exists()).toBeFalsy()
    })
  })

  describe('Paginated DataTable', () => {
    const wrapper = mount(
      <DataTable
        data={[
          {
            'name': 'Frederigo Mallebone',
            'age': '15'
          },
          {
            'name': 'Sutherlan Caulfield',
            'age': '35'
          }
        ]}
        columns={[
          {
            Header: 'Name',
            accessor: 'name'
          },
          {
            Header: 'Age',
            accessor: 'age'
          }
        ]}
        showPagination
      />
    )

    it('should contain the data', () => {
      expect(wrapper.contains('Frederigo Mallebone')).toBeTruthy()
      expect(wrapper.contains('Sutherlan Caulfield')).toBeTruthy()
    })

    it('should be paginated', () => {
      expect(wrapper.find('.-pagination').exists()).toBeTruthy()
    })
  })

  describe('Filtered DataTable', () => {
    const wrapper = mount(
      <DataTable
        tableId='test-table'
        data={[
          {
            'name': 'Frederigo Mallebone',
            'age': '15'
          },
          {
            'name': 'Sutherlan Caulfield',
            'age': '35'
          }
        ]}
        columns={[
          {
            Header: 'Name',
            accessor: 'name'
          },
          {
            Header: 'Age',
            accessor: 'age'
          }
        ]}
        showPagination
        showSearchFilter
      />
    )

    const mockedEvent = {
      target: {
        value: 'caul'
      }
    }

    wrapper
      .find({ name: 'test-table-search-filter' })
      .at(0)
      .simulate('change', mockedEvent)

    it('should have the search filter', () => {
      expect(wrapper.find({ name: 'test-table-search-filter' }).exists()).toBeTruthy()
    })

    it('should contain the filtered data', () => {
      expect(wrapper.contains('Sutherlan Caulfield')).toBeTruthy()
      expect(wrapper.contains('Frederigo Mallebone')).toBeFalsy()
    })

    it('should be paginated', () => {
      expect(wrapper.find('.-pagination').exists()).toBeTruthy()
    })
  })
})
