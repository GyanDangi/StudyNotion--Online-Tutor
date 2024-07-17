import React from 'react'
import Templates from '../Components/Templates'
import singUpImg from '../assets/signup.png'

const SignUp = ({setIsloggedIn}) => {
  return (
	<Templates

	title="Join the millions learning to code with studyNotion for the free."
		desc1="Build Skills for today, tomorrow, and beyond."
		desc2="Eduacation to future proof your career."
		image={singUpImg}
		formtype="signup"
		setIsloggedIn={setIsloggedIn}
	
	/>
  )
}

export default SignUp
