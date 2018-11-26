import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const HomePage = lazy(() => import('../containers/home'))
const AppPage = lazy(() => import('../containers/app'))

export default (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/app" component={AppPage} />
  </Switch>
)