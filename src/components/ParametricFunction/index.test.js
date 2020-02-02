import React from 'react'
import renderer from 'react-test-renderer'
import ParametricFunction from '.'

jest.mock('react-dom')

describe('ParametricFunction', () => {
  it('renders <a-entity>', () => {
    const tree = renderer.create(<ParametricFunction />).toJSON()
    expect(tree.type).toBe('a-entity')
  })
})
