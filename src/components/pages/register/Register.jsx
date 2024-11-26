import React from 'react';
import './register.css'
import {Link} from "react-router-dom";

function Register(props) {
	return (<>
		<div className='signin-parent'>
			<div className='signin-box'>
				<div className='right-side2'>
					<p><span>Plard</span>Gold</p>
				</div>
				<div className='left-side2'>
					<form className='register-area'>
						<h1>Регистрация</h1>
						<p className='title-inp'>Полное имя</p>
						<input className='inp-reg' type="text"/>
						<p className='title-inp'>Эл. адрес</p>
						<input className='inp-reg' type="text"/>
						<p className='title-inp'>Пароль</p>
						<input className='inp-reg' type="text"/>
						<p className='title-inp'>Повтарить пароль</p>
						<input className='inp-reg' type="text"/>
						<button className='register-btn' type="submit">Регистрация</button>
					</form>
				</div>
			</div>
		</div>
	</>);
}

export default Register;