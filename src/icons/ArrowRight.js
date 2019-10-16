import React from 'react'

const SvgComponent = props => (
  <svg
    viewBox="0 0 18 18"
    style={{
      height: 10,
      width: 10
    }}
    color="#484848"
    fill="currentcolor"
    {...props}>
    <path d="M4.29 1.71A1 1 0 115.71.3l8 8a1 1 0 010 1.41l-8 8a1 1 0 11-1.42-1.41l7.29-7.29z" fillRule="evenodd" />
  </svg>
)

export default SvgComponent
