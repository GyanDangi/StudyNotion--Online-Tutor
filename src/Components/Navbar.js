import React from 'react'
import { Link } from 'react-router-dom'
import  logo  from '../assets/Logo.svg';
import toast from 'react-hot-toast';

const Navbar = (props) => {

	let loggedIn= props.isLoggedIn;
	let setIsLoggedIn=props.setIsLoggedIn;
  return (
	<div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
		<Link to='/' >
		<img src={logo} alt="" width={160} height={32} loading='lazy'/>
		</Link>

		<nav >
			<ul className=' flex gap-x-6 mx-auto'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/'>About</Link>
				</li>
				<li>
					<Link to='/'>Contanct</Link>
				</li>
			</ul>
		</nav>

		{/* login- SignUp -Dashboard Logout	 */}
		<div className='flex items-center gap-x-4 '>
			{	!loggedIn &&
				<Link to='/login' >
					<button className='text-white bg-richblack-800 py-[8px] px-[10px] border border-richblack-700 rounded-md'>Log in</button>
				</Link>
			}
			{	!loggedIn &&
				<Link to='/signup' >
					<button className='text-white bg-richblack-800 py-[8px] px-[10px] border border-richblack-700 rounded-md'
						onClick={()=>{
							setIsLoggedIn(false);
							toast.success("you have logged out successfully");

						}}
					>Sign Up</button>
				</Link>
			}
			{	loggedIn &&
				<Link to='/dashboard' >
					<button 
						className='text-white bg-richblack-800 py-[8px] px-[10px] border border-richblack-700 rounded-md'
						onClick={()=>{
							setIsLoggedIn(false);
							toast.success("you have logged out successfully");

						}}
					>Logout</button>
				</Link>
			}
			{	loggedIn &&
				<Link to='/dashboard' >
					<button
						className='text-white bg-richblack-800 py-[8px] px-[10px] border border-richblack-700 rounded-md'
					>Dashboard</button>
				</Link>
			}
			
		</div>
	</div>
  )
}

export default Navbar
