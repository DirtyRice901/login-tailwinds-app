import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='flex flex-col items-center justify-center gap-4 p-4 bg-center mx-0 my-0 m-8 bg-fuchsia-50 rounded-3xl borders-2 border-gray-600 shadow-2xl'>
            <h1 className='mt-10 text-5xl font-semibold'>Welcome Back!</h1>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input 
                        className='w-full border-2 border-white-100 rounded-xl p-4 mt-1 bg-white' 
                        placeholder="Enter your email" 
                    />
                </div>
                <div>
                <label className='text-lg font-medium'>Password</label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-white' 
                        placeholder="Enter your password" 
                    />
                    <div className='px-1 py-1 mt-1'>
                        <input 
                            type="checkbox"
                            id="remember"
                        />
                        <label htmlFor="remember" className='px-2'>Remember me</label>
                    </div>
                    <button className='px-1 py-0 mt-4 mb-3 rounded-lg bg-pink-200 drop-shadow-xl'>Forgot password?</button>
                    <button className='w-full border-2 rounded-xl p-4 mt-11  bg-pink-200 drop-shadow-lg'>Login</button>
                    <p className='px-0 py-0 font-medium text-base text-gray-500 mt-10 mb-10 text-center hover:text-pink-200 cursor-pointer'>Don't have an account? Signup here</p>
                </div>
            </div>
        </div>
    )
}

export default Login;