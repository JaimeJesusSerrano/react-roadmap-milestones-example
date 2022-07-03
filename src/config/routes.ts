import { lazy, LazyExoticComponent } from 'react'

const PageNotFound = lazy(() => import(/* webpackChunkName: "PageNotFound" */ 'components/pages/page-not-found'))
const Roadmap = lazy(() => import(/* webpackChunkName: "Roadmap" */ 'components/pages/roadmap'))

type JSXComponent = () => JSX.Element

export interface IRoutes {
  [key: string]: IRoute
}

export interface IRoute {
  component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
  path: string
}

const routes: IRoutes = {
  home: {
    component: Roadmap,
    name: 'home',
    path: '/',
  },
  pageNotFound: {
    component: PageNotFound,
    name: 'Page not found',
    path: '/page-not-found',
  },
  roadmap: {
    component: Roadmap,
    name: 'Roadmap',
    path: '/roadmap/:id',
  },
}

export default routes
