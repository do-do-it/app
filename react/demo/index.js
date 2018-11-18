import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import routes from './routes'
import Layout from 'styles/index';

ReactDOM.render(
    <HashRouter>
        {routes}
    </HashRouter>,
    document.getElementById('app')
)