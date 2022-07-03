import React from 'react'

interface ParamTypes {
  children?: React.ReactNode
  title?: string
}

/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any*/
const SvgBase = ({ children, title, ...props }: ParamTypes): JSX.Element => (
  <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1991/xlink' {...props}>
    {title && <title>{title}</title>}
    {children}
  </svg>
)

export default SvgBase
