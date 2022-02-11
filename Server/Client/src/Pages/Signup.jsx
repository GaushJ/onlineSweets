import React from 'react'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import { useHistory } from 'react-router-dom';

const Signup = ()=>{
	const history = useHistory();
	const [user,setUser] = useState({
		name:"",email:"",phone:"",password:"",cpassword:""
	});
	
	let name ,value;

	const handleInputs = (e)=>{
		name = e.target.name;
		value = e.target.value;
		setUser({ ...user , [name]:value  })
	}

	const PostData = async (e) =>{
		e.preventDefault();
		
		const {name,email,phone,password,cpassword} = user;
		
		const res = await fetch("/register",{
			method:"POST",
			headers:{
				"Content-Type" :"application/json"
			},
			body:JSON.stringify({
				name,email,phone,password,cpassword
			})
		});

		const data = await res.json();

		if(res.status === 422 || !data){
			window.alert("Registration Failed");
			console.log("registeration Failed");
		}else{
			window.alert("Registration Successful");
			console.log("registeration Successful");
			history.push('/login')
		}
	}
    return(
		<>
		<div>
	
		</div>
			<div className="bg-white min-h-screen flex flex-col">
				<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
					<div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
						<h1 className="mb-8 text-3xl text-center">Sign up</h1>
						<form method="POST">
						<input 
							value={user.name}
							type="text"
							className="block border border-grey-light w-full p-3 rounded mb-4"
							name="name"
							onChange={handleInputs}
							placeholder="Full Name" />
	
						<input 
							value={user.email}
							type="text"
							className="block border border-grey-light w-full p-3 rounded mb-4"
							name="email"
							onChange={handleInputs}
							placeholder="Email" />
						<input 
							value={user.phone}
							type="text"
							className="block border border-grey-light w-full p-3 rounded mb-4"
							name="phone"
							onChange={handleInputs}
							placeholder="Phone number" />
	
						<input 
							value={user.password}
							type="password"
							className="block border border-grey-light w-full p-3 rounded mb-4"
							name="password"
							onChange={handleInputs}
							placeholder="Password" />
						<input 
							value={user.cpassword}
							type="password"
							className="block border border-grey-light w-full p-3 rounded mb-4"
							name="cpassword"
							onChange={handleInputs}
							placeholder="Confirm Password" />
	
						<button
						onClick={PostData}
							type="submit"
							className="w-full text-center hover:bg-red-500 transition duration-300 py-3 rounded bg-red-400 text-white hover:bg-green-dark focus:outline-none my-1"
						>Create Account</button>
						</form>
	
						<div className="text-center text-sm text-grey-dark mt-4">
							By signing up, you agree to the 
							<a href="/" className="no-underline border-b border-grey-dark text-grey-dark" >
								Terms of Service
							</a> and 
							<a href = "/" className="no-underline border-b border-grey-dark text-grey-dark" >
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