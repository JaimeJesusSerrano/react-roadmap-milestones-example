'use client'

import React from 'react'

import { ReactRoadmapMilestones } from '@jaimejesusserrano/react-roadmap-milestones'

import { getExample } from '@/app/services/roadmap-milestone'

const Page = (): JSX.Element => {
  return (
    <div className="flex size-full content-center justify-center">
      <div className="size-full overflow-auto md:mt-8 md:size-5/6">
        <ReactRoadmapMilestones roadmapMilestonesData={getExample()} />
      </div>
    </div>
  )
}

export default Page
