import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 2fr;
	margin: 150px 40px 0 40px;
	ul {
		list-style-type: none;
    	padding: 50px 0 0 0;
    	margin: 0 0 50px 0;
    	border-top: 1px solid #b3b5b7;
	}

  }
`

const Footer =() => {
	return (
		<FooterLayout>
			<div className="shop">Shop</div>
			<div className="company">Company</div>
			<div className="account">Account</div>
			<div className="legal">Legal</div>
			<div className="shopList">
				<ul>
					<li><Link to="/all">All</Link></li>
					<li><Link to="/eat">Eat</Link></li>
					<li><Link to="/drink">Drink</Link></li>
					<li><Link to="/decorate">Decorate</Link></li>
				</ul>
			</div>
			<div className="companyList">
				<ul>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>FAQs</li>
				</ul>
			</div>
			<div className="accountList">
				<ul>
					<li>My Orders</li>
					<li>Sign Up</li>
				</ul>
			</div>
			<div className="legalList">
				<ul>
					<li>Terms & Conditions</li>
					<li>Privacy Policy</li>
				</ul>
			</div>
		</FooterLayout>
	)
}


export default Footer