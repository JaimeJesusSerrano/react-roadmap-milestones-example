'use client'

import React from 'react'

import { ReactRoadmapMilestones } from '@jaimejesusserrano/react-roadmap-milestones'

import { getById } from '../services/roadmap-milestone'

const Roadmap = (): JSX.Element => {
  return (
    <div className='h-full w-full flex flex-column content-center justify-center'>
      <div className='md:h-5/6 md:w-5/6 md:max-w-5/6 overflow-auto md:mt-8'>
        <ReactRoadmapMilestones roadmapMilestonesData={getById(1)} />
      </div>
    </div>
  )
}

export default Roadmap
