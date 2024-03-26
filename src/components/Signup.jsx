import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


function Signup() {
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form Submitted')
            axios.post('http://localhost:3000/register', {name, email, password})
            .then(result => console.log(result))
            .catch(err=> console.log(err))
        }

    return (
    <div className='flex flex-col items-center justify-center gap-4 p-4 bg-center mx-0 my-0 m-8 bg-fuchsia-50 rounded-3xl borders-2 border-gray-600 shadow-2xl'>
    <h1 className='mt-10 text-5xl font-semibold'>Register</h1>
    <form onSubmit={handleSubmit}>
    <div className='mt-8'>
        <div>
            <label htmlFor="email">
                <strong>Name</strong>
            </label>
            <input
                id="name" 
                className='w-full border-2 border-white-100 rounded-xl p-4 mt-1 bg-white'
                type="text" 
                placeholder="Enter your name" 
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
            <label className='text-lg font-medium'>Email</label>
            <input
                id="email" 
                className='w-full border-2 border-white-100 rounded-xl p-4 mt-1 bg-white' 
                type="email"
                placeholder="Enter your email" 
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
            <label className='text-lg font-medium'>Password</label>
            <input 
                id="password"
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-white'
                type="password" 
                placeholder="Enter your password" 
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
            <button type="submit" className='w-full border-2 rounded-xl p-4 mt-10  bg-pink-200 drop-shadow-lg'>Register</button>
    </div>
    </form>
    <Link to="/login" className='px-3 py-3 font-medium text-base text-gray-500 mt-2 mb-2 text-center hover:text-pink-200 cursor-pointer'>Already Registered? Login here</Link>
</div>
    );
}

export default Signup;
