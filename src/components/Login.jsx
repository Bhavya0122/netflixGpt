import { useState, useRef } from 'react';
import React from 'react';
import Header from './Header';
import { checkValidate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = checkValidate(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    else {
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("This user doesn't exist.Try to sign up first");
        });
    }
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="bg-img" />
      </div>
      <form className=' bg-black/80 absolute text-white w-3/12 my-40 mx-auto right-0 left-0 m-4'>
        <h1 className='font-bold text-3xl p-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input type="text" ref={name}
          className='w-80 mx-5 my-3 p-4 border border-white bg-transparent'
          placeholder='Full Name' />}

        <input type="text" ref={email}
          className='w-80 mx-5 my-3 p-4 border border-white bg-transparent'
          placeholder='Email or mobile Number' />

        <input type="password" ref={password}
          className='w-80 mx-5 my-3 p-4 border border-white'
          placeholder='Password' />

        <p className='text-red-500 text-lg mx-5 my-2'>{errorMessage}</p>

        <button
          className='w-80 bg-red-600 mx-5 my-3 p-2'
          onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In now"}</p>
      </form>
    </div>
  )
}

export default Login;