import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='bg-gray-100 px-10 py-20 rounded-3xl borders-2 border-gray-600 shadow-2xl'>
            <h1 className='text-5xl font-semibold'>Welcome Back!</h1>
            <p className='font-medium text-lg text-gray-500 mt-4 text-center'> Please enter your details.</p>
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
                        <label for="remember" className='px-2'>Remember me</label>
                    </div>
                    <button className='px-1 py-0 mt-2 rounded-lg bg-pink-300 drop-shadow-xl'>Forgot password?</button>
                    <button className='w-full border-2 rounded-xl p-4 mt-11  bg-pink-300 drop-shadow-lg'>Login</button>
                </div>
            </div>
        </div>
    )
}