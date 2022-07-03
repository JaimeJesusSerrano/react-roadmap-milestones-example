import React from 'react'

import SvgBase from 'assets/svg/SvgBase'

/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any*/
const Svg = (props: any): JSX.Element => (
  <SvgBase
    fill='none'
    height='20px'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    viewBox='0 0 24 24'
    width='20px'
    {...props}
  >
    <polyline points='18 15 12 9 6 15'></polyline>
  </SvgBase>
)

export default Svg
