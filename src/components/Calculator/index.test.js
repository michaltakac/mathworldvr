import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Calculator from '.'

jest.mock('react-dom')

describe('Calculator', () => {
  it('renders <a-entity>', () => {
    const tree = renderer.create(<Calculator />).toJSON()
    expect(tree.type).toBe('a-entity')
  })

  it('renders the entity consistently', () => {
    const entityWrapper = renderer.create(<Calculator />).toJSON()
    expect(entityWrapper).toMatchSnapshot()
  })
})
