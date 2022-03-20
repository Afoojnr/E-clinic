import React from 'react'
import google from '../Assets/google.svg'
import doc from '../Assets/maledoc.png'

function Login() {
  return (
   <div className="div-container">
       <div className="left">
           <div className="logo">
                E-CLINIC
           </div>
           <div className="greetings">
               Welcome Back!
           </div>
           <div className="otherauth">
               <span>You don't have an account?</span> <span><a href="##">Sign up</a></span>
           </div>
           <div className="form">
               <form action="">
                   <div className='field'>
                       <label htmlFor="email">Email</label> <br />
                       <input type="email" name="" id="email" placeholder='useremail@gmail.com' />
                    </div>
                   <div className='field'>
                       <label htmlFor="password">Password</label> <br />
                       <input type="password" name="" id="password" placeholder='Enter your password' />
                    </div>
                    
                    <div className="norm_signup">
                        <input type="button" value="Login" />
                        <a href='#'>Forgot Password</a>
                    </div>
                    <div className="google_signup">      
                        <button><a href="#"><img src={google} alt="" /> Sign in with Google</a></button>
                    </div>
                        
               </form>
           </div>

       </div>
       <div className="right">
            <img src={doc} alt="" />
       </div>
   </div>
  )
}

export default Login