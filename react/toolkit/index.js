import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import 'normalize.css'
import 'styles/global.less'
import Error from './containers/error'
import Layout from './containers/layouts'

ReactDOM.render(
    <Error>
        <HashRouter>
            <Layout />
        </HashRouter>
    </Error>,
    document.getElementById('app')
)