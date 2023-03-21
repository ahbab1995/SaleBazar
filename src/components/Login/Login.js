
import React from 'react'
import auth from './../firebase/firebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div  className='d-flex justify-content-center my-3'>
        
       <button type='button' className='btn btn-info' onClick={()=>signInWithGoogle()}>Google</button>
    </div>
  )
}

export default Login