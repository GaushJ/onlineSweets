import React,{useState}from 'react'
import {NavLink} from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    const loginUser = async (e) =>{
        console.log("hello login");
        e.preventDefault();
        
        const res = await fetch('/login',{
            method:'POST',
            headers:{
                "content-type":'application/json'
                },
            body:JSON.stringify({
                email,password
            })
        });
        const data = await res.json();
        if(res.status === 400 || !data ){
            
            window.alert("login failed");
            console.log("login failed");
            
        }else{
            window.alert("login successfull");
            console.log("login successfull");
            history.push('/');
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        
    };
    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <input
                        type="submit"
                        value="Login"
                        onClick={loginUser}
                            className={`bg-green py-2 px-4 text-sm text-white transition duration-300 font-medium hover:bg-red-500 bg-red-400 rounded border border-green focus:outline-none focus:border-green-dark`}
                        />
                            
                        
                    </div>
                </form>
                <div className="mt-6 text-center">
                    New Here?  
                    <NavLink className="no-underline ml-2 border-b border-blue text-blue-500" to="../Signup/" >
                        Sign up
                    .</NavLink>
                </div>
               
            </div>
            
        </div>
    );
};

export default Login;