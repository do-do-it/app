import React, { Component, Fragment } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'home'
        }
    }
    render() {
        const { msg } = this.state
        return (
            <Fragment>
                <div className='home'>
                    {msg}
                </div>
            </Fragment>
        );
    }
}