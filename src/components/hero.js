import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Menu from './menu';


const HeroImageMain = styled.div`
	height: 1260px;
  	.hero-image {
  		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('http://www.bookingchef.com/wp-content/uploads/2018/06/coffee-mugs-contemporary-cups-modern-australia-for-designs-and-saucers.jpg');
  		height: 100%;
  		background-position: center;
    	background-repeat: no-repeat;
    	background-size: cover;
    	position: relative;
	}
	.hero-text {
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
	}
  }
`


const Hero =() => {
	return (
		<HeroImageMain>
			<div className="hero-image">
			<Menu colorProp='white'/>
				<div className="hero-text">
					<h1>Bespoke, Handcrafted, Beautiful</h1>
					<Link to="/all"><button>Shop now</button></Link>
				</div>
			</div>
		</HeroImageMain>
	)
}


export default Hero