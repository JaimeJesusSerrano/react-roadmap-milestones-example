import React from 'react'

import SvgBase from 'assets/svg/SvgBase'

/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any*/
const Svg = (props: any): JSX.Element => (
  <SvgBase height='16' viewBox='0 0 16 16' width='16' {...props}>
    <path
      d='M8 0C8.49103 0 8.8889 0.370858 8.8889 0.828572L8.88847 7.11059L15.1714 7.11111C15.6291 7.11111 16 7.50897 16 8C16 8.49103 15.6291 8.88889 15.1714 8.88889L8.88847 8.88847L8.8889 15.1714C8.8889 15.6291 8.49103 16 8 16C7.50897 16 7.1111 15.6291 7.1111 15.1714L7.11058 8.88847L0.82857 8.88889C0.371428 8.88889 0 8.49103 0 8C0 7.50897 0.371428 7.11111 0.82857 7.11111L7.11058 7.11059L7.1111 0.828572C7.1111 0.370858 7.50897 0 8 0Z'
      fill='currentColor'
    ></path>
  </SvgBase>
)

export default Svg
