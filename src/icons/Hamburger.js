import React from 'react'

const SvgComponent = props => (
  <svg height={24} width={24} color="rgb(110, 118, 121)" {...props}>
    <path
      d="M4 13a1 1 0 010-2h16a1 1 0 010 2zm0-6a1 1 0 110-2h16a1 1 0 010 2zm0 12a1 1 0 010-2h16a1 1 0 010 2z"
      fill="currentColor"
    />
  </svg>
)

export default SvgComponent
