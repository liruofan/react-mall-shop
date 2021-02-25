import React, { Component } from 'react'
import { getSwiper } from '../../api'
import swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
// import { connect } from 'react-redux'

export default class Swiper extends Component {
	render() {
		const {items} = this.state
		return (
			<div className="homeSwiper">
				<div className="swiper-container">
					<div className="swiper-wrapper">
						{items.map((item, index) => {
							return (
							<div className="swiper-slide" key={index}>
								<img alt="" style={{width:'100%'}} className="img_item" src={item.image_src} />
							</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
	state = {
		items: []
	}
	componentDidMount () {
		this._initSwiperData()
	}
	_initSwiperData = async () => {
		const { message } = await getSwiper()
		this.setState({items:message},() => {
			this._initSwiper()
		})
	}
	_initSwiper = () => {
		this.mySwiper = new swiper('.swiper-container', {
			loop: true,
			autoplay: {
				disableOnInteraction: false
			}
		})
	}
}
