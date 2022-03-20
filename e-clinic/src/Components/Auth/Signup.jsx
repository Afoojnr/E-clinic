import React from 'react'
import png from '../Assets/ladydoc.png'
import google from '../Assets/google.svg'

function Signup() {
  return (
   <div className="div-container">
       <div className="left">
           <div className="logo">
                E-CLINIC
           </div>
           <div className="greetings">
               Sign Up to E-CLINIC
           </div>
           <div className="otherauth">
               <span>Already have an account?</span> <span><a href="##">Log In</a></span>
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
                        <input type="button" value="Create an Account" />
                    </div>
                    <div className="google_signup">      
                        <button><a href="#"><img src={google} alt="" /> Sign Up with Google</a></button>
                    </div>
                        
               </form>
           </div>

       </div>
       <div className="right">
            <img src={png} alt="" />
       </div>
   </div>
  )
}

export default Signup