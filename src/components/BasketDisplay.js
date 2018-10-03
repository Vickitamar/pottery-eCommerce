import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { updateBasket } from '../actions/index';
import Menu from './menu';
import Footer from './Footer';


class BasketDisplay extends Component {
	constructor(props) {
		super(props);
	}

	priceCount() {
		let basketPriceArray = Object.values(this.props.basketDisplayProp.items)
		const newArr = basketPriceArray.map((basketKey) => {
			return basketKey.price;
		});
		console.log(newArr)
		let sum = newArr.reduce((total, val) => total + val, 0);
		// console.log(sum);
		return (
			<span>{sum}</span>
		)
	}

	renderBasket() {
	// console.log("render basket", this.props.basketDisplayProp)
		let basketArray = Object.values(this.props.basketDisplayProp.items)
		// console.log("basketArray:", basketArray)
		return basketArray.map((basketKey) => {
			return (
				<div>
						<li
						key={basketKey.title}
						className="basketItem"
						>
						<h3>{basketKey.title}</h3>
						<h3>£{basketKey.price}</h3>
						<img src={basketKey.image} alt="basket item" style={{height:'200px', width:'200px'}} />
						<button>Remove</button>
						</li>
				</div>
			);
		});
	}
	render() {
		return (
			<div>
			<Menu />
			<div className="basketContainer">
				<div className="basketHeading">
					<button className="shopping">CONTINUE SHOPPING</button>
					<h1>Your Basket £{this.priceCount()}</h1>
					<button className="checkout">CHECKOUT</button>
				</div>
				<div className="basketOutput">
					<ul>
					{this.renderBasket()}
					</ul>
				</div>
			</div>
			<Footer />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		basketDisplayProp: state.basketUpdate
	};
}

export default connect(mapStateToProps)(BasketDisplay)