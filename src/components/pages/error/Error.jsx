import React from 'react';
import './error.css'
import {Link} from "react-router-dom";

function Error(props) {
	return (<div className='error-parent'>
		<div className='error-box'>
			<Link className='error-link' to='/'>
				Назад
			</Link>
		</div>
	</div>);
}

export default Error;