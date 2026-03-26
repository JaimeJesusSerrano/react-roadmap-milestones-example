'use client'

import React, { type ReactElement } from 'react'

import { createComponent } from '@lit/react'
import { RoadmapMilestones } from '@jaimejesusserrano/roadmap-milestones'

import { getExample } from '@/app/services/roadmap-milestone'

export const RoadmapMilestonesReact = createComponent({
  tagName: 'rm-roadmap-milestones',
  elementClass: RoadmapMilestones,
  react: React,
})

const Page = (): ReactElement => {
  return (
    <div className="flex size-full place-content-center">
      <div className="size-full overflow-auto md:mt-8 md:size-5/6">
        <RoadmapMilestonesReact roadmapMilestonesData={getExample()} />
      </div>
    </div>
  )
}

export default Page
