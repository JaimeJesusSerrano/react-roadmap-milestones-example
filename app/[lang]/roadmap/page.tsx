'use client'

import React from 'react'

import { ReactRoadmapMilestones } from '@jaimejesusserrano/react-roadmap-milestones'

import { getExample } from '@/app/services/roadmap-milestone'

const Page = (): JSX.Element => {
  return (
    <div className="flex h-full w-full content-center justify-center">
      <div className="h-full w-full overflow-auto md:mt-8 md:h-5/6 md:w-5/6">
        <ReactRoadmapMilestones roadmapMilestonesData={getExample()} />
      </div>
    </div>
  )
}

export default Page
