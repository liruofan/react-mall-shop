import React, { Component } from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import homeImg from './home.png'
import activeHomeImg from './home_clone.png'
import categoryImg from './category.png'
import activecategoryImg from './category_clone.png'
import cartImg from './cart.png'
import activecartImg from './cart_clone.png'
import myImg from './my.png'
import activemyImg from './my_clone.png'
import './navigatorFooter.scss'

class NavigatorFooter extends Component {
	render() {
		const {navList} = this.state
		const {changeNavigator} = this
		return (
			<div className="navFooter">
				{
					navList.map((item, index) => {
						return (
						<NavLink onClick={() => changeNavigator(item.location)} className="nav_item" key={index} to={item.location} activeClassName="active">
							<img alt="" style={{ display:this.props.location.pathname === item.location ? 'block' : 'none' }} src={ item.activeImgUrl }/>
							<img alt="" style={{ display:this.props.location.pathname === item.location ? 'none' : 'block' }} src={ item.imgUrl }/>
							{item.name}
						</NavLink>
						)
					})
				}
			</div>
		)
	}
	state = {
		navList: [
			{
				location:'/home',
				name:'首页',
				imgUrl:homeImg,
				activeImgUrl:activeHomeImg
			},{
				location:'/category',
				name:'分类',
				imgUrl:categoryImg,
				activeImgUrl:activecategoryImg
			},{
				location:'/cart',
				name:'购物车',
				imgUrl:cartImg,
				activeImgUrl:activecartImg
			},{
				location:'/profile',
				name:'我的',
				imgUrl:myImg,
				activeImgUrl:activemyImg
			}
		]
	}
	changeNavigator = (value) => {
		this.setState({
			current_location: value
		})
	}
}
export default withRouter(NavigatorFooter)
