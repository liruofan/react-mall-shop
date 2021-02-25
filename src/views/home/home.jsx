import React, { Component } from 'react'
import Header from '../../components/header/header'
import Swiper from '../../components/swiper/swiper'
import './home.scss'
// import { connect } from 'react-redux'

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<Header>
					<span ref="haha2" className="title">商城首页</span>
				</Header>
				<div className="search_container">
					<div className="search">搜索</div>
				</div>
				<Swiper/>
			</div>
		)
	}
}
