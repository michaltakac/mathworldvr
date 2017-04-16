import React from 'react'
import renderer from 'react-test-renderer'
import { Entity } from 'aframe-react'
import FunctionBox from '.'

jest.mock('react-dom')

describe('FunctionBox', () => {
  it('renders <a-entity>', () => {
    const tree = renderer.create(<FunctionBox />).toJSON()
    expect(tree.type).toBe('a-entity')
  })

  it('is interactable with super-hands', () => {
    const tree = renderer.create(
      <FunctionBox />
    ).toJSON()
    expect(tree.props.className).toBe('interactive')
  })

  it('renders children <a-entity>', () => {
    const tree = renderer.create(
      <FunctionBox>
        <Entity />
      </FunctionBox>
    ).toJSON()
    expect(tree.children[0].type).toBe('a-entity')
  })
})
