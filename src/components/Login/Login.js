
import React from 'react'
import auth from './../firebase/firebase';
import { useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router';

const Login = () => {
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);

    const [user, loading, error] = useAuthState(auth);

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user) {
      navigate(from, { replace: true });
    }
    
  return (
    <div  className='d-flex justify-content-center my-3'>
        
       <button type='button' className='btn btn-primary' onClick={()=>signInWithGoogle()}>Google</button>
    </div>
  )
}

export default Login