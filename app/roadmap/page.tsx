'use client'

import React from 'react'

import { ReactRoadmapMilestones } from '@jaimejesusserrano/react-roadmap-milestones'

import { getExample } from '../services/roadmap-milestone'

const Roadmap = (): JSX.Element => {
  return (
    <div className="h-full w-full flex flex-column content-center justify-center">
      <div className="md:h-5/6 md:w-5/6 md:max-w-5/6 overflow-auto md:mt-8">
        <ReactRoadmapMilestones roadmapMilestonesData={getExample()} />
      </div>
    </div>
  )
}

export default Roadmap
