import React, { useState } from 'react';
import './Log.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form"> 
          <h2 className="title">Login</h2>
            <div className="input-field">
              <i className="fa fa-user"></i>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
           

            <input type="submit" value="Login" className="btn solid" />
          </form>
          <form action="#" className="sign-up-form">
          <h2 className="title">Forget Password</h2>
        
            <div className="input-field">
              <i className="fa fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder=" Confirm Password" />
            </div>

            <input type="submit" className="btn" value="update" />
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">

          <h3>Forget Password</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>


            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
              change pwd
            </button>
          </div>

          <img
            src="https://raw.githubusercontent.com/sefyudem/Sliding-Sign-In-Sign-Up-Form/955c6482aeeb2f0e77c1f3c66354da3bc4d7a72d/img/register.svg"
            className="image"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">

          <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
        
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
              login
            </button>
          </div>

          <img
            src="https://raw.githubusercontent.com/sefyudem/Sliding-Sign-In-Sign-Up-Form/955c6482aeeb2f0e77c1f3c66354da3bc4d7a72d/img/log.svg"
            className="image"
            alt=""
          />
          

        </div>
      </div>
    </div>
  );
};

export default Login;
