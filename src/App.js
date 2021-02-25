import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import NavigatorFooter from './components/navigatorFooter/navigatorFooter'
import Home from '../src/views/home/home'
import Category from '../src/views/category/category'
import Cart from '../src/views/cart/cart'
import Profile from '../src/views/profile/profile'
export default class App extends Component {
	render() {
		return (
			<Fragment>
				<Switch>
					<Route path="/home" component={Home}></Route>
					<Route path="/category" component={Category}></Route>
					<Route path="/cart" component={Cart}></Route>
					<Route path="/profile" component={Profile}></Route>
					<Redirect to="/home"></Redirect>
				</Switch>
				<NavigatorFooter />
			</Fragment>	
		)
	}
}