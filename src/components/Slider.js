import React from 'react';
import styled from 'styled-components';

const SliderLayout = styled.div`
	width: 100%;
	.slider{
		-webkit-appearance: none;
    	appearance: none;
    	width: 100%;
    	height: 15px;
    	border-radius: 5px;
    	background: #d3d3d3;
    	outline: none;
    	opacity: 0.7;
    	-webkit-transition: .2s;
    	transition: opacity .2s;
	}
	.slider:hover {
    	opacity: 1;
	}
	.slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #4CAF50;
      cursor: pointer;
	}

	.slider::-moz-range-thumb {
	    width: 25px;
	    height: 25px;
	    border-radius: 50%;
	    background: #4CAF50;
	    cursor: pointer;
	}
  }
`

const Slider =() => {
	return (
		<SliderLayout>
			<input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange" />
		</SliderLayout>
	)
}


export default Slider