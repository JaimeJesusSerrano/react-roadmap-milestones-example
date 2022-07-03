import React from 'react'

import Backdrop from '@mui/material/Backdrop'

import LoaderAnimation from 'components/atoms/loader-animation'

import * as S from './styled'

const ScreenLoader = (): JSX.Element => {
  return (
    <Backdrop open={true} style={{ zIndex: 9999 }}>
      <S.Body>
        <LoaderAnimation />
      </S.Body>
    </Backdrop>
  )
}

export default ScreenLoader
