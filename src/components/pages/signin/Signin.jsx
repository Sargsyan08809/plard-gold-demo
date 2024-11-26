import React from 'react';
import './signin.css'
import {useState} from "react";
import Checkbox from '@mui/material/Checkbox';
import {Link} from "react-router-dom";
function Signin(props) {
	const [checked, setChecked] = useState(true);
	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
	return (
		<>
			<div className='signin-parent'>
					<div className='signin-box'>
						<div className='left-side'>
							<form className='signin-area'>
								<div className='signandreg'>
									<h1>Вход</h1>
									<Link className='linktoregister' to="/registration"><h1>Регистрация</h1></Link>
								</div>

								<p className='title-login'>Эл. адрес</p>
										<input className='email-inp' type="email"/>
											<p className='title-login'>Пароль</p>
											<input className='password-inp' type="password"/>
								<div className='checkbox-remindme'>
									<Checkbox
										checked={checked}
										onChange={handleChange}
										inputProps={{ 'aria-label': 'controlled' }}
									/>
									<p>Запомни меня</p>
								</div>
								<button className='send-btn' type="submit">Вход</button>
								<div className='forget-password-box'>
											<p className='forget-txt'>Забыли пароль?</p>
									<Link className='link-to-forget' to='/forget'>Восстановить</Link>
								</div>
							</form>
						</div>
						<div className='right-side'>
							<p><span>Plard</span>Gold</p>
						</div>
					</div>
			</div>
		</>
	);
}

export default Signin;