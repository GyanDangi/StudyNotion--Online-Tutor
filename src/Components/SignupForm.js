import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye ,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsloggedIn}) => {

	let navigate =useNavigate();

	const [accountType, setAccountType] = useState("Student");

	const [formData, setFormData] =useState(
		{
			firstName:"",
			lastName:"",
			email:"",
			password:"",
			confirmPassword:"",
		}
	)

		const [showPassword, setShowPassword]= useState(false);
		const [showConfirmedPassword, setShowConfirmedPassword]= useState(false);

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
		if(formData.password!==formData.confirmPassword){
			toast.error("Password doesn't Match");
			return
		}

		toast.success("account Created");

		
		const finaldata={
			...formData,
			accountType
		}
		console.log(finaldata);
		setIsloggedIn(true);
		navigate('/dashboard')
	}

  return (
	<div>
		{/* Student Instructor: */}
		<div className=' flex rounded-full bg-richblack-800 w-[250px] mt-4 h-11
		 justify-between gap-2'>
			
			<button
			className={
				`${accountType==='Student' ?"bg-richblack-900 font-semibold":
					"bg-transparent"} px-6 m-[4px] ml-[3px] rounded-full transition-all duration-200`
			}
			onClick={()=>setAccountType('Student')}
			>Student</button>


			<button
			className={
				`${accountType==='Instructor' ?"bg-richblack-900 font-semibold":
					"bg-transparent"} px-6 m-[4px] ml-[3px] rounded-full transition-all duration-200`
			}
			onClick={()=>setAccountType('Instructor')}
			>Instrcutor</button>

		</div>


		<form 
		className=' flex flex-col w-full gap-y-4 mt-6'
		onSubmit={submitHandler}>

			{/* First name and lastname */}
			<div className=' w-full flex flex-row gap-6'>

				<label className=' w-full'>
					<p className=' text-white mb-1 text-[0.95rem] leading-[1.375rem]'>First Name<sup  className=' text-red-700 font-semibold'>*</sup></p>
					<input type="text"
						className=' hover:border-r-blue-700 w-full rounded-md bg-richblack-800 text-[0.95rem] text-white h-11 p-[12px]'
						required
						name='firstName'
						value={formData.firstName}
						onChange={changeHandler}
						placeholder='Enter First Name'

					/>
				</label>

				<label className=' w-full'>
					<p className=' text-white mb-1 text-[0.95rem] leading-[1.375rem]'>Last Name<sup  className=' text-red-700 font-semibold'>*</sup></p>
					<input type="text"
					className='w-full rounded-md bg-richblack-800 text-[0.95rem] text-white h-11 p-[12px]
					'
						required
						name='lastName'
						value={formData.lastName}
						onChange={changeHandler}
						placeholder='Enter Last Name'

					/>
				</label>


			</div>


			{/* Email address */}
			<label>
				<p className=' text-white mb-1 text-[0.95rem] leading-[1.375rem]'>Email Address <sup  className=' text-red-700 font-semibold'>*</sup></p>
				<input
				className=' hover:border-r-blue-700 w-full rounded-md bg-richblack-800 text-[0.95rem] text-white h-11 p-[12px]'
				required 
				type="email"
				value={formData.email} 
				onChange={changeHandler}
				name='email'
				placeholder='enter email Id'/>
			</label>

			{/* Create and confirm password */}

			<div className=' flex flex-row gap-x-6'>

				<label className=' w-full relative'>
					<p 
					className=' text-white mb-1 text-[0.95rem] leading-[1.375rem]'
					>Create Password<sup  className=' text-red-700 font-semibold'>*</sup></p>
					<input
					className=' hover:border-r-blue-700 w-full rounded-md bg-richblack-800 text-[0.95rem] text-white h-11 p-[12px]'
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
							showPassword ? (<AiOutlineEye />):(<AiOutlineEyeInvisible/>)
						}
					</span>
				</label>

				<label className='w-full relative'>
					<p className=' text-white mb-1 text-[0.95rem] leading-[1.375rem]'>Confirm Password<sup  className=' text-red-700 font-semibold'>*</sup></p>
					<input
					className=' hover:border-r-blue-700 w-full rounded-md bg-richblack-800 text-[0.95rem] text-white h-11 p-[12px]'
					required 
					type={showConfirmedPassword?("text"):("password")}
					value={formData.confirmPassword} 
					onChange={changeHandler}
					name='confirmPassword'
					placeholder='confirm Password'/>
					<span 
					className=' absolute right-3 cursor-pointer top-[38px]'
					onClick={()=> setShowConfirmedPassword((prev)=>!prev)}>
						{
							showConfirmedPassword ? (<AiOutlineEye />):(<AiOutlineEyeInvisible/>)
						}
					</span>
				</label>
			</div>

			<div>
				<button className=' bg-yellow-500 w-full rounded-md h-[40px] mt-4'>
					<p className=' font-bold text-xl text-black '> Create Account</p></button>
			</div>
			

		</form>
	</div>
  )
}

export default SignupForm
