import React from 'react';

const Scroll = (props) => {

	return (
			<div style={{overflowY: 'Scroll', border:'2px solid white', height:'700px'}}>
			{props.children}
			</div>
		);

};

export default Scroll;