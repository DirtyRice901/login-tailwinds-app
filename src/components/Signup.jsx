import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    return (<div className='flex flex-col items-center justify-center gap-4 p-4 bg-center mx-0 my-0 m-8 bg-fuchsia-50 rounded-3xl borders-2 border-gray-600 shadow-2xl'>
    <h1 className='mt-10 text-5xl font-semibold'>Register</h1>
    <div className='mt-8'>
        <div>
            <label className='text-lg font-medium'>Name</label>
            <input 
                className='w-full border-2 border-white-100 rounded-xl p-4 mt-1 bg-white' 
                placeholder="Enter your email" 
            />
        </div>
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
            <button className='w-full border-2 rounded-xl p-4 mt-11  bg-pink-200 drop-shadow-lg'>Register</button>
            <Link to="/login" className='px-0 py-0 font-medium text-base text-gray-500 mt-10 mb-10 text-center hover:text-pink-200 cursor-pointer'>Already Registered? Login here</Link>
        </div>
    </div>
</div>
    );
}