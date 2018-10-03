import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { updateBasket } from '../actions/index';
import Menu from './menu';
import Footer from './Footer';

const DecorateDetailLayout = styled.div`
	margin: 75px 20px 0 50px;
	color: black;
	background-color: #eaeaea;
	.link-layout
	.link-list-item button {
		font-family: 'Cutive Mono', monospace;
		padding: 25px 25px;
		margin: 20px 5px 0 5px;
		font-size: 12px;
		font-wight: 700;
		background: white;
		border-radius: 2%;
		color: black;
	}
	a {
		text-decoration: none;
		color: black;
	}
	a:active {
		color: black;
	}
	.addButton {
		float: right;
		padding: 5px 5px;
		width: 20px;
	}
	.list-group-item h1, .list-group-item button {
		display: inline;
		width: 50%;
		margin: 5px 5px;
	}
  }
`

class DecorateDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			value: 0,
			object: ''
		};

	this.basket = this.basket.bind(this);
	this.handleChange = this.handleChange.bind(this)
	}

	basket() {
		// console.log(this.props.drinkItemDetail)
		const item = Object.assign({}, this.props.decorateItemDetail, {count: +this.state.value})
		// console.log(item)
		this.setState({
			// count: +this.state.value + +this.state.count,
			object: this.props.decorateItemDetail
		});
		this.props.updateBasket(item)

	}

	handleChange(event) {
		let valueSelect = event.target.value;
		this.setState({
			value: valueSelect
		})
	}


	render() {
		if (!this.props.decorateItemDetail) {
			return <div className="select_decorateItem">Select an item to get started.</div>;
		}

		return (
			<div className="background" style={{backgroundColor:'#eaeaea'}}>
				<Menu colorProp='black' backgroundProp='#eaeaea'/>
				<DecorateDetailLayout>
					<div className="decorateItem_detail">
						<img src={this.props.decorateItemDetail.imageMain} alt="sellers item" />
						<div className="title_decorate_detail">{this.props.decorateItemDetail.title}</div>
						<div className="price_decorate_detail">£{this.props.decorateItemDetail.price}
						</div>
						<div className="description_decorate_detail">{this.props.decorateItemDetail.description}</div>
						<div className="color_decorate_detail">{this.props.decorateItemDetail.color}</div>
						<div className="size_decorate_detail">{this.props.decorateItemDetail.size}
							<select onChange={(e) => this.handleChange(e)}>
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
							</select>
							<p>quanity in basket: {this.state.count} </p>
						</div>
						<button onClick={this.basket}>Add To Basket</button>
					</div>
				</DecorateDetailLayout>
				<Link to="/decorate">
					<button>Back</button>
				</Link>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		decorateItemDetail: state.activeDecorate
	};
}
//Anything returned from this function will end up as props on the the menu compoenet
function mapDispatchToProps(dispatch) {
	//whenever the action updateBasket is called, the result should be passed to all our reducers.
	return bindActionCreators({ updateBasket: updateBasket }, dispatch) //new prop: action creator, dispatch
}

export default connect(mapStateToProps, mapDispatchToProps)(DecorateDetail);