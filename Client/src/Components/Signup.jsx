import React from 'react'
import {NavLink} from 'react-router-dom'


const Signup = ()=>{
    return(
		<>
		<div>
	
		</div>
			<div className="bg-white min-h-screen flex flex-col">
				<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
					<div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
						<h1 className="mb-8 text-3xl text-center">Sign up</h1>
						<input 
							type="text"
							className="block border border-grey-light w-full p-3 rounded mb-4"
							name="fullname"
							placeholder="Full Name" />
	
						<input 
							type="text"
							className="block border border-grey-light w-full p-3 rounded mb-4"
							name="email"
							placeholder="Email" />
	
						<input 
							type="password"
							className="block border border-grey-light w-full p-3 rounded mb-4"
							name="password"
							placeholder="Password" />
						<input 
							type="password"
							className="block border border-grey-light w-full p-3 rounded mb-4"
							name="confirm_password"
							placeholder="Confirm Password" />
	
						<button
							type="submit"
							className="w-full text-center hover:bg-red-500 transition duration-300 py-3 rounded bg-red-400 text-white hover:bg-green-dark focus:outline-none my-1"
						>Create Account</button>
	
						<div className="text-center text-sm text-grey-dark mt-4">
							By signing up, you agree to the 
							<a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
								Terms of Service
							</a> and 
							<a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
								Privacy Policy
							</a>
						</div>
					</div>
	
					<div className="mt-6">
						Already have an account? 
						<NavLink className="no-underline border-b ml-2 border-blue text-blue-500" to="../login/">
							Log in
						</NavLink>.
					</div>
				</div>
			</div>
			</>
    )
}
export default Signup;