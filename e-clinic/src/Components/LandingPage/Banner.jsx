import React from 'react'
import img from '../Assets/Group 4.png'

function Banner() {
  return (
    <div className='banner_compo'>
        <div className="banner_text_container">
            <h1>
                Consult a Doctor Anytime, Anywhere and  Schedule Meeting.
            </h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ullam voluptatibus assumenda ipsum officia incidunt sequi commodi magnam quia.
            </p>

            <div className="talk_to_a_doc">
                Talk to a Doctor
            </div>
        </div>

        <div className="banner_img_container">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Banner