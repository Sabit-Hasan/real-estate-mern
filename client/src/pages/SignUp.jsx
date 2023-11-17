import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>

      <form className='flex flex-col gap-4'>
        <input type="text" name="username" id="username" placeholder='User Name' className='border p-3 rounded-lg' />
        <input type="email" name="email" id="email" placeholder='Email' className='border p-3 rounded-lg' />
        <input type="password" name="password" id="password" placeholder='Password' className='border p-3 rounded-lg' />
        <button className='bg-black text-white p-3 rounded-lg hover:opacity-90 uppercase'>Sign up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to="/sign-in"><span className='text-blue-700'>Sign In</span></Link>
      </div>
    </div>
  )
}
