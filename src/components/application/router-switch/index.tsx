import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import routes, { IRoute } from 'config/routes'

const RouterSwitch = (): JSX.Element => {
  return (
    <Routes>
      {Object.values(routes).map(({ component: Component, path }: IRoute) => (
        <Route element={<Component />} key={path} path={path} />
      ))}
      <Route path='*' element={<Navigate to={routes.pageNotFound.path} replace />} />
    </Routes>
  )
}

export default RouterSwitch
