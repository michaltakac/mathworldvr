import React from 'react'
import PropTypes from 'prop-types'

const Mock = (props = {}) => <span>{props.children}</span>;

Mock.displayName = 'Mock';
Mock.propTypes = {
  children: PropTypes.any,
};

exports = module.exports = new Proxy({}, {
  get: () => Mock,
});
