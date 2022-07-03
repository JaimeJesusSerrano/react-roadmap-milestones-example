import React from 'react'

import SvgBase from 'assets/svg/SvgBase'

/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any*/
const Svg = (props: any): JSX.Element => (
  <SvgBase height='12' viewBox='0 0 12 12' width='12' {...props}>
    <path
      fill='currentColor'
      d='M7.42508 6L11.7003 10.2752C12.0999 10.6748 12.0999 11.3008 11.7003 11.7003C11.3008 12.0999 10.6748 12.0999 10.2752 11.7003L6 7.42508L1.72475 11.7003C1.32519 12.0999 0.699223 12.0999 0.299667 11.7003C-0.099889 11.3008 -0.099889 10.6748 0.299667 10.2752L4.57492 6L0.299667 1.72475C-0.099889 1.32519 -0.099889 0.699223 0.299667 0.299667C0.699223 -0.099889 1.32519 -0.099889 1.72475 0.299667L6 4.57492L10.2752 0.299667C10.6748 -0.099889 11.3008 -0.099889 11.7003 0.299667C12.0999 0.699223 12.0999 1.32519 11.7003 1.72475L7.42508 6Z'
    ></path>
  </SvgBase>
)

export default Svg
