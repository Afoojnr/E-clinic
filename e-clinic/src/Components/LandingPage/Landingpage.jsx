import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import Section_1 from './Section_1'

function Landingpage() {
  return (
    <div className='landing_page'>
        <Nav />
        <Banner />
        <Section_1 />
    </div>
  )
}

export default Landingpage