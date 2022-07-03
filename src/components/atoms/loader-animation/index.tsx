import React from 'react'

import * as S from './styled'

const LoaderAnimation = (): JSX.Element => {
  return (
    <S.Wrapper>
      <S.First />
      <S.Second />
      <S.Third />
    </S.Wrapper>
  )
}

export default LoaderAnimation
