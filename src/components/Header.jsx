import React,{useEffect} from 'react';
import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((store)=>store.user);

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({ uid: uid,
           email: email,
          displayName: displayName,
         })
        );
        navigate("/browse");

      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    })
    .catch((error) => {
    });
  }

  return (
    <div>
      <div className='absolute w-full px-8 py-2 bg-gradient-to-t from to-black z-10 flex justify-between'>
        <img className='w-48' src={LOGO}
          alt="logo" />
        {user && <div className="m-4">
          <button className="text-white font-bold" onClick={handleSignOut}>Sign Out</button>
        </div>}
      </div>
    </div>
  )
}

export default Header;