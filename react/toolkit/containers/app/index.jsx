import React, { Fragment, Component } from 'react'
import './index.less'
import AppItem from './AppItem'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: 'app1'
                },
                {
                    name: 'app2'
                },
                {
                    name: 'app2'
                },
                {
                    name: 'app2'
                },
                {
                    name: 'app2'
                },
                {
                    name: 'app2'
                },
                {
                    name: 'app2'
                },
                {
                    name: 'app2'
                },
                {
                    name: 'app2'
                },
                {
                    name: 'app2'
                }
            ]
        }
    }
    render() { 
        const { list } = this.state
        return (
            <Fragment>
                <div className='apps'>
                    {
                        list.map((item, index) => (
                            <AppItem key={index} {...item} />
                        ))
                    }
                </div>
            </Fragment>
        );
    }
}
 
export default App;