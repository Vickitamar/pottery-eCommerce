import React from 'react';
import { connect } from 'react-redux';
import { selectAll } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './menu';
import Footer from './Footer';

const AllMenu = styled.div`
	color: black;
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
class All extends React.Component {
	constructor() {
		super();
		this.state = {
			search: '',
			counter: 1
		};
	}

	updateSearch(event) {
		this.setState({
			search: event.target.value,
			counter: this.state.counter + 1
		})
		// if(this.state.counter % 2 === 0) {
		// 	this.setState({
		// 		search: ''
		// 	})
		// }
	}

	resetForm() {
		this.setState({
			search: ''
		})
	}

	renderList() {
		let filteredAllItems = this.props.allItems.filter(
			(allItem) => {
				return allItem.category.indexOf(this.state.search) !== -1;
			}
		);
		return filteredAllItems.map((allItem) => {
			return (
				<div className="link-list-item link-layout" style={{backgroundImage:`url(${allItem.image})`}}>
					<Link to="/allDetail">
						<li
						key={allItem.title}
						onClick={() => this.props.selectAll(allItem)}
						className="list-group-item"
						>
						<h1>{allItem.title}</h1>
						<button className="addButton"> + ADD</button>
						<h3>{allItem.price}</h3>
						</li>
					</Link>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<AllMenu >
					<Menu colorProp='black'/>
						<ul className="list-group">
							<li className="link-list-item" style={{border:'0.5px solid #b3b5b7', textAlign:'center'}}>
								<h1>All page</h1>
								<h2>And another thing</h2>
								<h3>Sort by:</h3>
								{/*<input
									type="text"
									value={this.state.search}
									onChange={this.updateSearch.bind(this)}
								/>*/}
								<div className="searchOptions">
									<div>
										<label>Eat</label>
										<input type="checkbox" name="colour" value="eat" checked={this.state.search === "eat"} onChange={this.updateSearch.bind(this)}/>
									</div>
									<div>
										<label>Drink</label>
										<input type="checkbox" name="colour" value="drink" checked={this.state.search === "drink"} onChange={this.updateSearch.bind(this)}/>
									</div>
									<div>
										<label>Decorate</label>
										<input type="checkbox" name="colour" value="decorate" checked={this.state.search === "decorate"} onChange={this.updateSearch.bind(this)}/>
									</div>
									<div>
										<label>White</label>
										<input type="checkbox" name="colour" value="white" checked={this.state.search === "white"} onChange={this.updateSearch.bind(this)}/>
									</div>
									<div>
										<label>Black</label>
										<input type="checkbox" name="colour" value="black" checked={this.state.search === "black"} onChange={this.updateSearch.bind(this)}/>
									</div>
									<div>
										<label>Grey</label>
										<input type="checkbox" name="colour" value="grey" checked={this.state.search === "grey"} onChange={this.updateSearch.bind(this)}/>
									</div>
									<div>
										<label>Bue</label>
										<input type="checkbox" name="colour" value="blue" checked={this.state.search === "blue"} onChange={this.updateSearch.bind(this)}/>
									</div>
									<div>
										<label>Yellow</label>
										<input type="checkbox" name="colour" value="yellow" checked={this.state.search === "yellow"} onChange={this.updateSearch.bind(this)}/>
									</div>
									<div>
										<label>Clear filters</label>
										<input type="checkbox" name="colour" value="clear" onChange={this.resetForm.bind(this)}/>
									</div>
								</div>
							</li>
							{this.renderList()}
						</ul>
				</AllMenu>
				<Footer />
			</div>
		)
	}
}


function mapStateToProps(state) {
	//whatever gets returns from here will show up as props inside of BookList
	return {
		allItems: state.all
	};
}

//Anything returned from this function will end up as props on the Booklist container
function mapDispatchToProps(dispatch) {
	//whenever the action selectBook is called, the result should be passed to all our reducers.
	return bindActionCreators({ selectAll: selectAll }, dispatch) //new prop: action creator, dispatch
}

// promote BookList from a component to a container  -  it needs to know about this dispatch method, selectBook. Makes it avaliable as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(All);