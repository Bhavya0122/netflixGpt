import { useState } from 'react';
import React from 'react';
import Header from './Header';

const Login = () => {
  const[isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm=()=>
  {
    setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick=()=>
  {

  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" 
        alt="bg-img"/>
    </div>
    <form className=' bg-black/80 absolute text-white w-3/12 my-40 mx-auto right-0 left-0 m-4'>
      <h1 className='font-bold text-3xl p-4'>{isSignInForm ? "Sign In" : "Sign Up" }</h1>
      {!isSignInForm && <input type="text"
       className='w-80 mx-5 my-3 p-4 border border-white bg-transparent'
       placeholder='Full Name'/> }

      <input type="text"
       className='w-80 mx-5 my-3 p-4 border border-white bg-transparent'
       placeholder='Email or mobile Number'/>

      <input type="password" 
      className='w-80 mx-5 my-3 p-4 border border-white' 
      placeholder='Password'/>

      <button 
      className='w-80 bg-red-600 mx-5 my-3 p-2' onClick={handleButtonClick}>
      {isSignInForm ? "Sign In" : "Sign Up" }
      </button>
      <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In now" }</p>
    </form>
    </div>
  )
}

export default Login;