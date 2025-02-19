import React, { useState, useEffect } from 'react';
import SignUp from './SignUp.jsx';

function LogIn (props) {
    const  { loginFunc, signupBtnFunc } = props; 
    const { un, pw } = props; 

    return (
            <div >
                <h1>JEOPARDY: GOLD+ EDITION</h1>
                <h2>Please Log In....</h2>
                <div id="login-field">
                    <form onSubmit={loginFunc}>
                        <input className="signupField" id="inputField" placeholder="username" onChange={un} ></input>
                        <input className="signupField" id="inputField" type="password" placeholder="password" onChange={pw} ></input>
                        <button className="signupField" id="splash-button" type="submit">Sign In</button>
                        <button className="signupField" id="splash-button" type="button" onClick={signupBtnFunc}>Sign Up</button>
                    </form>
                </div>
            </div>
    )
}

export default LogIn;