import React from 'react';
import { connect } from 'react-redux';
import { selectDecorate } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './menu';
import Footer from './Footer';

const DecorateMenu = styled.div`
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
class Decorate extends React.Component {
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
		let filteredDecorateItems = this.props.decorateItems.filter(
			(decorateItem) => {
				return decorateItem.color.indexOf(this.state.search) !== -1;
			}
		);
		return filteredDecorateItems.map((decorateItem) => {
			return (
				<div className="link-list-item link-layout" style={{backgroundImage:`url(${decorateItem.image})`}}>
					<Link to="/decorateDetail">
						<li
						key={decorateItem.title}
						onClick={() => this.props.selectDecorate(decorateItem)}
						className="list-group-item"
						>
						<h1>{decorateItem.title}</h1>
						<button className="addButton"> + ADD</button>
						<h3>{decorateItem.price}</h3>
						</li>
					</Link>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<DecorateMenu >
					<Menu colorProp='black'/>
						<ul className="list-group">
							<li className="link-list-item" style={{border:'0.5px solid #b3b5b7', textAlign:'center'}}>
								<h1>Decorate page</h1>
								<h2>And another thing</h2>
								<h3>Sort by:</h3>
								{/*<input
									type="text"
									value={this.state.search}
									onChange={this.updateSearch.bind(this)}
								/>*/}
								<div className="searchOptions">
									<div>
										<label>White</label>
										<input type="checkbox" name="colour" value="white" checked={this.state.search === "white"} onChange={this.updateSearch.bind(this)}/>
									</div>
									<div>
										<label>Black</label>
										<input type="checkbox" name="colour" value="black" checked={this.state.search === "black"} onChange={this.updateSearch.bind(this)}/>
									</div>
									<div>
										<label>Terricotta</label>
										<input type="checkbox" name="colour" value="terricotta" checked={this.state.search === "terricotta"} onChange={this.updateSearch.bind(this)}/>
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
				</DecorateMenu>
				<Footer />
			</div>
		)
	}
}


function mapStateToProps(state) {
	//whatever gets returns from here will show up as props inside of BookList
	return {
		decorateItems: state.decorate
	};
}

//Anything returned from this function will end up as props on the Booklist container
function mapDispatchToProps(dispatch) {
	//whenever the action selectBook is called, the result should be passed to all our reducers.
	return bindActionCreators({ selectDecorate: selectDecorate }, dispatch) //new prop: action creator, dispatch
}

// promote BookList from a component to a container  -  it needs to know about this dispatch method, selectBook. Makes it avaliable as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(Decorate);