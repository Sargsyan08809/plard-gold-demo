import React from 'react';
import './forget.css'
import {Link} from "react-router-dom";

function Forget(props) {
	return (<>
		<div className='signin-parent'>
			<div className='signin-box'>
				<div className='left-side'>
					<form className='signin-area'>
						<div className='forget-top'>
							<h1>Восстановление пароля</h1>
							<p>Lorem ipsum dolor sit amet, consectetur a
								dipiscing elit. Magnis a sapien tristique semper vulputate
								nisl. Laoreet pharetra donec diam fusce et.</p>
						</div>
						<div className='forget-midd'>
							<p className='title-login'>Эл. адрес</p>
							<input className='email-inp' type="email"/>
							<button className='send-btn' type="submit">Отправить</button>
						</div>
						<div>

						</div>
						<div className='forget-password-box'>
							<p className='forget-txt'>Помните свой пароль?</p>
							<Link className='link-to-forget'>Попробовать сново</Link>
						</div>
					</form>
				</div>

				<div className='right-side'>
					<p><span>Plard</span>Gold</p>
				</div>
			</div>
		</div>
	</>);
}

export default Forget;