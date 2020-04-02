import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { App } from 'components'

const propTypes = {
  store: PropTypes.object.isRequired,
}

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)

Root.propTypes = propTypes
export default Root
