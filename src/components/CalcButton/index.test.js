import React from 'react'
import renderer from 'react-test-renderer'
import CalcButton from '.'

jest.mock('react-dom')

describe('CalcButton', () => {
  it('renders <a-entity>', () => {
    const tree = renderer.create(<CalcButton />).toJSON()
    expect(tree.type).toBe('a-entity')
  })

  it('renders <a-entity> with id', () => {
    const tree = renderer.create(
      <CalcButton id="calc-button" />
    ).toJSON()
    expect(tree.props.id).toBe('calc-button')
  })

  it('is interactable with super-hands', () => {
    const tree = renderer.create(
      <CalcButton />
    ).toJSON()
    expect(tree.props.className).toBe('interactive')
  })
})
