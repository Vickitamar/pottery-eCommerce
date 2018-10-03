import React from 'react';
import styled from 'styled-components';


const SearchStyle = styled.div`

  }
`
class Search extends React.Component {

	render() {
		return (
			<SearchStyle>
				<div>
					<input type="text" defaultValue="Search" />
				</div>
			</SearchStyle>
		)
	}
}

export default Search;