import React from 'react';
import './sign-in-and-sign-up.style.scss';
import SignIn from '../../component/Sign-in/Sign-in.component';
import SignUp from '../../component/sign-up/signin.component';


const SignInAndSignUp =() => (
    <div className='sign-in-and-sign-up'>
     <SignIn />
     <SignUp />
     </div>
)

export default SignInAndSignUp;