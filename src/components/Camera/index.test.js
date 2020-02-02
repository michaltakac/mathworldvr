import React from 'react'
import renderer from 'react-test-renderer'
import Camera from '.'

jest.mock('react-dom')

describe('Camera', () => {
  it('renders <a-entity>', () => {
    const tree = renderer.create(<Camera />).toJSON()
    expect(tree.type).toBe('a-entity')
  })
})
