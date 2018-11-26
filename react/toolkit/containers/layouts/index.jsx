import React, { Fragment, Suspense } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import Slider from './slider'
import routes from '../../routes'

const Layout = () => {
  return (
    <Fragment>
      <div className='layout-slider'><Slider /></div>
      <div className='layout-container'>
        <Suspense fallback={<div>Loading...</div>}> 
          {routes}
        </Suspense>
      </div>
    </Fragment>
  )
}

export default Layout