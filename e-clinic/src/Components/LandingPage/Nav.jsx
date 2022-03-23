import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='nav_compo'>
        <div className="icon">
            E-CLINIC
        </div>

        <div className="centered_nav_items">
            <div className="n_item">Home</div>
            <div className="n_item">Find a Doctor</div>
            <div className="n_item">Article</div>
        </div>

        <div className="auth_nav_items">
            <Link to='login'>
            <div className="an_item">
                Login
            </div>
            </Link>

            <Link to='sign-up'>
            <div className="an_item solid">
                Sign up
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Nav