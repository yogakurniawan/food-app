import React from 'react'

const SvgComponent = props => (
  <svg color="rgb(249, 66, 58)" height={24} width={24} {...props}>
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path
        d="M12 4c-3.317 0-6 2.782-6 6.222C6 14.89 12 20 12 20s6-5.111 6-9.778C18 6.782 15.317 4 12 4zm0 8.444c-1.183 0-2.143-.995-2.143-2.222C9.857 8.996 10.817 8 12 8s2.143.996 2.143 2.222c0 1.227-.96 2.222-2.143 2.222z"
        fill="currentColor"
      />
    </g>
  </svg>
)

export default SvgComponent
