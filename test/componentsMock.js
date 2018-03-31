import React from 'react'
import PropTypes from 'prop-types'

module.exports = new Proxy({}, {
  get: (target, property) => {
    const Mock = (props) => <a-entity>{props.children}</a-entity>

    Mock.displayName = property
    Mock.propTypes = {
      children: PropTypes.any,
    }

    return Mock
  },
})
