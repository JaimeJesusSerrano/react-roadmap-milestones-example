import React from 'react'

import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { ReactRoadmapMilestones } from 'react-roadmap-milestones'
import { useParams } from 'react-router-dom'

import MainTemplate from 'components/templates/main'
import { getById as getByIdRoadmapMilestone } from 'services/roadmap-milestone'

import * as S from './styled'

interface ParamTypes {
  id: string
}

const Roadmap = (): JSX.Element => {
  const { id } = useParams<ParamTypes>()
  const { t } = useTranslation()

  const { data: roadmapMilestoneData } = useQuery('roadmapMilestoneData', () =>
    getByIdRoadmapMilestone(id ? parseInt(id) : 1)
  )

  return (
    <MainTemplate>
      <S.Wrapper>
        <S.BoardWrapper>
          <ReactRoadmapMilestones
            roadmapMilestonesData={roadmapMilestoneData}
            translation={{
              previousButton: {
                hidePrevious: t('milestoneRoadmap.hidePrevious'),
                showPrevious: t('milestoneRoadmap.showPrevious'),
              },
            }}
          />
        </S.BoardWrapper>
      </S.Wrapper>
    </MainTemplate>
  )
}

export default Roadmap
