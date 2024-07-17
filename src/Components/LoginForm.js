import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye ,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsloggedIn}) => {

	const [showPassword, setShowPassword]= useState(false);

	const navigate =useNavigate();

	const [formData, setFormData] = useState(
		{
			email:"",
			password:"",
		}
	)

	function changeHandler(event){
		setFormData((prevData)=>(
			{
				...prevData,
				[event.target.name]:event.target.value
			}
		))
		
	}

	function submitHandler(event){
			event.preventDefault();
			setIsloggedIn(true);
			toast.success("loaged In")
			navigate("/dashboard")
	}

  return (
	<div >
		<form 
		className=' flex flex-col w-full gap-y-4 mt-6'
		onSubmit={submitHandler}

		>
			<label className='w-full '>
				<p className=' text-white mb-1 text-[0.95rem] leading-[1.375rem]'>
					Email Address <sup className=' text-red-700 font-semibold'>*</sup></p>
				<input
				className=' w-full rounded-md bg-richblack-800 text-[0.95rem] text-white h-[40px] p-[12px]'
				required 
				type="email"
				value={formData.email} 
				onChange={changeHandler}
				name='email'
				placeholder='enter email Id'/>
			</label>


			<label className=' w-full relative'>
				<p className=' text-white mb-1 text-[0.95rem] leading-[1.375rem]'
				>Password<sup className=' text-red-700 font-semibold'>*</sup></p>
				<input
				className=' hover:border-r-blue-700 w-full rounded-md bg-richblack-800 text-[0.95rem] text-white h-[40px] p-[12px]'
				required 
				type={showPassword?("text"):("password")}
				value={formData.password} 
				onChange={changeHandler}
				name='password'
				placeholder='enter Password'/>

				<span 
				className=' absolute right-3 cursor-pointer top-[38px]'
				onClick={()=> setShowPassword((prev)=>!prev)}>
					{
						showPassword ?
						(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2bf'/>):
						 (<AiOutlineEye fontSize={24} fill='#AFB2bf' />)
					}
				</span>
				<Link to='#'>
				<p className=' mt-1 text-blue-500  max-w-max ml-auto'>
					Forget Password
				</p>
				</Link>
			</label>

			<button
				className=' bg-yellow-500 w-full rounded-md h-[40px] mt-4'
			>
				<p
				className=' font-bold text-xl text-black '
				>Sign In</p>
			</button>
		</form>
	</div>
  )
}

export default LoginForm
