import React from 'react'

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
            <div className="an_item">
                Login
            </div>

            <div className="an_item solid">
                Sign up
            </div>
        </div>
    </div>
  )
}

export default Nav