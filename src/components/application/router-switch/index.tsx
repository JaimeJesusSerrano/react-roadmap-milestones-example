import React from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

import routes, { IRoute } from 'config/routes'

const RouterSwitch = (): JSX.Element => {
  return (
    <Switch>
      {Object.values(routes).map(({ component, path }: IRoute) => (
        <Route component={component} exact={true} key={path} path={path} />
      ))}
      <Route path='*'>
        <Redirect to={routes.pageNotFound.path} />
      </Route>
    </Switch>
  )
}

export default RouterSwitch
