import React from 'react'

const SvgComponent = props => (
  <svg width={20} height={18} {...props}>
    <g fill="#FFF" fillRule="evenodd">
      <path d="M17.014 7.054c0 .22.147.372.371.372h1.478c.22 0 .371-.147.371-.372 0-.224-.147-.371-.371-.371h-1.478c-.22 0-.371.224-.371.371zm-.886-3.404l1.036-1.037a.36.36 0 000-.518.36.36 0 00-.518 0L15.61 3.132a.36.36 0 000 .518.36.36 0 00.519 0zm-3.923-1.404c.22 0 .371-.147.371-.372V.397c0-.221-.147-.372-.371-.372s-.371.147-.371.372v1.477c.004.22.15.372.371.372zM8.286 3.65a.36.36 0 00.519 0 .36.36 0 000-.518L7.768 2.095a.36.36 0 00-.518 0 .36.36 0 000 .518L8.286 3.65z" />
      <path
        fillRule="nonzero"
        d="M17.756 10.679c0-1.257-.592-2.368-1.477-3.106v-.519c0-2.22-1.85-4.07-4.07-4.07-1.629 0-3.033.964-3.698 2.368-.372-.073-.74-.147-1.11-.147a5.148 5.148 0 00-5.18 5.18v.294C.89 11.271 0 12.529 0 14.083a3.664 3.664 0 003.698 3.699h12.577a3.664 3.664 0 003.698-3.699c.004-1.555-.886-2.812-2.217-3.404zm-5.551-6.956c1.85 0 3.33 1.478 3.33 3.331v.074a3.987 3.987 0 00-1.848-.445c-.813 0-1.478.22-2.147.592-.592-.813-1.405-1.405-2.294-1.776.518-1.033 1.702-1.776 2.959-1.776zm4.07 13.32H3.698a2.967 2.967 0 01-2.96-2.96c0-1.404.964-2.588 2.295-2.886-.074-.298-.074-.518-.074-.812A4.454 4.454 0 017.4 5.944c1.703 0 3.254.963 3.996 2.44a3.245 3.245 0 012.295-.962 3.315 3.315 0 013.33 3.33v.445c1.258.294 2.22 1.478 2.22 2.886a2.979 2.979 0 01-2.966 2.96z"
      />
    </g>
  </svg>
)

export default SvgComponent
