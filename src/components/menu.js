import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from './Search';


const MenuMain = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	color: ${props => props.color};
	background-color: ${props => props.background};
	padding-top: 50px;
	.header-cell {
		border: 0.5px solid #b3b5b7;
		font-size: 20px;

	}
	.menu-emptybox {
		padding: 15px 150px;

	}

	.menu-title {
		padding: 15px 50px;
	}
	p {
		display: none;
	}
	.nav-menu {
		width: 40%;
	}

	ul {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		list-style-type: none;
    	margin:0;
    	padding: 0;
	}
	li {
		display: inline;
		border: 0.5px solid #b3b5b7;
		padding: 15px 20px;
		font-size: 20px;
	}
	a, a:visited {
		text-decoration: none;
		color: ${props => props.color};
	}
  }
`


class Menu extends Component {
	constructor(props) {
		super(props);
	}


	basketCount() {
		let basketCountArray = Object.values(this.props.basketUpdateProp.items)
		const newArr = basketCountArray.map((basketKey) => {
			return basketKey.count;
		});
		let sum = newArr.reduce((total, val) => total + val, 0);
		// console.log(sum);
		return (
			<span>{sum}</span>
		)
	}

	render() {
		return (
			<MenuMain color={this.props.colorProp} background={this.props.backgroundProp}> {/*assigning colorProps to color*/}
					<Link to="/">
						<div className="header-cell menu-title">
							<h4>Taurus Pottery</h4>
						</div>
					</Link>
					<div className="header-cell menu-emptybox">
						<p>Empty Box</p>
					</div>

					<div className="nav-menu">
						<ul>
							<li><Link to="/eat">Eat</Link></li>
							<li><Link to="/drink">Drink</Link></li>
							<li><Link to="/decorate">Decorate</Link></li>
							<li>About Us</li>
							<li><Link to="/basket">
							Basket: {this.basketCount()}
							</Link></li>
							<li><Search/></li>
						</ul>
					</div>
			</MenuMain>
		)
	}
}

function mapStateToProps(state) {
	return {
		basketUpdateProp: state.basketUpdate
	};
}


export default connect(mapStateToProps)(Menu)