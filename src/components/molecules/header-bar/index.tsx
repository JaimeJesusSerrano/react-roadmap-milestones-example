import React from 'react'
import { useTranslation } from 'react-i18next'

import * as S from './styled'

const HeaderBar = (): JSX.Element => {
  const { t } = useTranslation()

  return <S.Wrapper>{t('header.title')}</S.Wrapper>
}

export default HeaderBar
