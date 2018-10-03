import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainScreen = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	.block {
		margin-top: 100px;
		margin-right: 50px;
		height: 700px;
		width: 450px;
	}
	.blockFirst {
		margin-left: 40px;
	}
	.eatImage {
  		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://i.etsystatic.com/6734380/d/il/fb8bca/1568717531/il_340x270.1568717531_nsik.jpg?version=0');
  		height: 100%;
  		background-position: center;
    	background-repeat: no-repeat;
    	background-size: cover;
    	position: relative;
	}

	.drinkImage {
  		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://img.etsystatic.com/il/7c23a0/1320698860/il_340x270.1320698860_kwz0.jpg?version=0');
  		height: 100%;
  		background-position: center;
    	background-repeat: no-repeat;
    	background-size: cover;
    	position: relative;
	}

	.decorateImage {
  		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://cdn.notonthehighstreet.com/fs/20/e1/c216-59c5-42aa-a184-8d9d43cc4145/preview_collared-jug.jpg');
  		height: 100%;
  		background-position: center;
    	background-repeat: no-repeat;
    	background-size: cover;
    	position: relative;
	}
	.innerText {
		text-align: center;
    	position: absolute;
    	top: 55%;
    	left: 50%;
    	width: 59%;
    	transform: translate(-50%, -50%);
    	color: white;
    	letter-spacing: 3px;
    	font-size: 20px;
	}
	button {
		font-family: 'Cutive Mono', monospace;
		padding: 25px 30px;
		margin-top: 50px;
		font-size: 20px;
		font-wight: 700;
		background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
		border-radius: 2%;
		color: white;
	}
  }
`

const MainMenuScreen =() => {
	return (
		<MainScreen>
				<div className="block blockFirst">
					<div className="InnerBlock eatImage">
						<div className="innerText">
							<h1>Eat</h1>
							<Link to="/eat">
								<button>Shop now</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="block">
					<div className=" InnerBlock drinkImage">
						<div className="innerText">
							<h1>Drink</h1>
							<Link to="/drink">
								<button>Shop now</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="block">
					<div className="InnerBlock decorateImage">
						<div className="innerText">
							<h1>Decorate</h1>
							<Link to="/decorate">
								<button>Shop now</button>
							</Link>
						</div>
					</div>
				</div>
		</MainScreen>
	)
}


export default MainMenuScreen