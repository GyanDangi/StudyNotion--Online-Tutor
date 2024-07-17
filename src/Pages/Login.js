import React from 'react'
import Templates from './../Components/Templates';
import loginImg from '../assets/login.png'

const Login = ({setIsloggedIn}) => {
  return (
	<Templates
		title="Wlecome Back"
		desc1="Build Skills for today, tomorrow, and beyond."
		desc2="Eduacation to future proof your career"
		image={loginImg}
		formtype="login"
		setIsloggedIn={setIsloggedIn}


	/>
  )
}

export default Login
