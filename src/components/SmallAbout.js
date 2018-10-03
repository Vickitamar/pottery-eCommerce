import React from 'react';
import styled from 'styled-components';

const SmallAboutLayout = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	color: black;
	margin-top: 50px;
	width: 100%;
	.smallAboutText {
		background-color: #f2ede6;
		padding: 20px 50px;
		line-height: 1.6;
	}
	.emailText {
		background-color: #ddd2c1;
		padding: 20px 160px;
	}
  }
`

const SmallAbout =() => {
	return (
		<SmallAboutLayout>
			<div className="smallAboutText">
				<h3>About us</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque tincidunt metus id condimentum. Nullam posuere vel risus a hendrerit. Suspendisse ante ipsum, pretium et erat ut, pretium luctus lorem. Ut eget auctor leo, ut sodales magna. Praesent suscipit enim porta nunc mattis mattis. Nullam convallis ipsum libero, in commodo ligula consectetur vitae. Suspendisse tincidunt lacus euismod facilisis lobortis. Aenean sit amet efficitur dui. Duis tristique semper molestie. Vivamus rutrum condimentum dapibus.</p>
			</div>
			<div className="emailText">
				<p>email signup</p>
			</div>
		</SmallAboutLayout>
	)
}


export default SmallAbout