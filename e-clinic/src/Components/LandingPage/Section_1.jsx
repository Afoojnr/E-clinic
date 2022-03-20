import React from 'react'
import img from '../Assets/doctor (1).png'
import img2 from "../Assets/Vector.png"
// import img3 from "../Assets/"

function Section_1() {
  return (
    <div className='section_1'>
        <h1>Why you should Trust us?</h1>
        <h1>Get to know about us.</h1>

        <div className="section_1_card_items">
            <div className="c_item">
                <img src={img} alt="" />
                <div className="card_text">
                  <h3>All Specialist</h3>
                  <p>
                    You can reach out to 3500+ doctors from this site, who are experienced in medicine.
                  </p>
                </div>
            </div>

            <div className="c_item">
                <img src={img2} alt="" />
                <div className="card_text">
                  <h3>Private & Secure</h3>
                  <p>
                    All your data is protected and safe guarded with sucured SSL data at rest encryption.
                  </p>
                </div>
            </div>

            <div className="c_item">
                <img src={img} alt="" />
                <div className="card_text">
                  <h3>24/7 Service</h3>
                  <p>
                    You can reach out to 3500+ doctors from this site, who are experienced in medicine.
                  </p>
                </div>
            </div>

            <div className="c_item">
                <img src={img} alt="" />
                <div className="card_text">
                  <h3>Chat with a Doctor</h3>
                  <p>
                  All your data is protected and safe guarded with sucured SSL data at rest encryption.
                  </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section_1