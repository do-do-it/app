import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Bundle from './components/Bundle'

import HomePage from 'bundle-loader?lazy!./containers/home/index'

export default (
    <Switch>
        <Route path="/" exact component={Bundle(HomePage)} />
        <Route path="/home" component={Bundle(HomePage)} />
    </Switch>
)