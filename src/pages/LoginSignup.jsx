import React from "react";
import './LoginSignup.css';
const LoginSignup=()=>{
    return(
        <div className="loginsignup">
<div className="loginsignup-container">
    <h1>Sign Up</h1>
    <div className="loginsignup-field">
        <input type="text" placeholder="Your name"/>
        <input type="email" placeholder="Email address"/>
        <input type='password' placeholder="Password"/>
    </div>
    <button>Continue</button>
    <p className="loginsignup-login">Already have an account? <span>Login</span></p>
    <div className="loginsignup-agree">
        <input type="checkbox" name='' id=''/>
        <p>By continuing, I agree to the tems of use &privacy policy</p>
    </div>
</div>
        </div>
    )
}
export default LoginSignup;