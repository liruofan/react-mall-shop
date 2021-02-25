import React, { Component } from 'react'
import './header.scss'
// import { connect } from 'react-redux'

export default class Header extends Component {
	render() {
		const {children} = this.props
			return (
				<div className="header">
						{ Array.isArray(children) ? children.map(item => item) : children }
				</div>
			)
	}
}
