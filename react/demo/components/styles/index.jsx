import React from 'react'
import ajax from 'http/index'
import { Toast } from 'antd-mobile'
import './index.less';

class Layout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {
				title: '维权中心',
				bg: 'http://partyjo.nextdog.cc/server/public/upload/20180821/aa18258798d502d7002cfb6f6159d718.jpg'
			}
		}
	}
	componentWillMount () {
		this.getwebInfo()
	}
	getwebInfo () {
		ajax({
			method: 'get',
			url: '/system/get',
			params: {
				id: 1
			}
		}).then(res => {
			if (res.code === 0) {
				document.title = res.data.title
				this.setState({
					data: res.data
				})
			} else if (res.code === 1001) {
				Toast.fail(res.msg)
			}
		})
	}
	render () {
		const data = this.state.data
		return (
			<div className='app' style={{ backgroundImage: 'url('+data.bg+')' }}>
			{this.props.children}
		</div>
		)
	}
}

export default Layout