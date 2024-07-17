import React from 'react'
import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";

const Templates = ({title, desc1, desc2, image, formtype, setIsloggedIn}) => {
  return (
	<div  className=' flex flex-row w-11/12 max-w-[1160px] h-screen py-12 mx-auto gap-x-12  gap-y-0 justify-between'>
		<div className='w-11/12 max-w-[450px]'>
			<h1
				className='text-white font-bold text-[1.875rem] leading-[1.73rem] '
			>{title}</h1>
			<p className=' text-[1.25rem] leading-[1.625rem] mt-4'>
				<span className=' text-richblack-100'>
					{desc1}
				</span>
				<br />

				<span className=' text-blue-100 italic' >
					{desc2  }
				</span>
			</p>

			{
				formtype==='signup' ? 
				(<SignupForm setIsloggedIn={setIsloggedIn}/>) :
				(<LoginForm setIsloggedIn={setIsloggedIn}/>)
			}

			<div className=' flex w-full items-center my-4 gap-x-2
			'>
				<div className='h-[1px] w-full bg-richblack-700'></div>

				<div className=' text-richblack-700 font-bold leading-[1.75rem] rounded-sm'>OR</div>

				<div className='h-[1px] w-full bg-richblack-700'></div>
			</div>
	
			<button className='flex w-full justify-center items-center rounded-md font-medium border  border-richblack-700
				gap-x-2 mt-6 px-[12px] py-[8px]'>
				<FcGoogle />
				<p className=' text-white'>Sign up With Google</p>
			</button>

		</div>

		<div  className=' relative w-11/12 max-w-[450px]'>
			<img src={frameImage} alt="Pattern"
			width={558}
			height={504}
			loading='lazy'
			className=' rounded-md'
			 />
			<img src={image} alt="Student"
			width={558}
			height={504}
			loading='lazy'
			className=' absolute -top-4 right-4 rounded-md'
			 />
		</div>
	</div>
  )
}

export default Templates
