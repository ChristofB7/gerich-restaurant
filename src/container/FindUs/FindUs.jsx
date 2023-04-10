import React from "react"
import './FindUs.css'


import { SubHeading } from '../../components'
import { images } from '../../constants'

const FindUs = () => (
    <div className="app__bg app__wrapper section__padding" id="contact">
        <div className="app__wrapper_info">
            <SubHeading title="Contact"></SubHeading>
            <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
            <div className="app__wrapper-content">
                <p className="p__opensans">Seattle, Washington, 123rd 456th street</p>
                <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
                <p className="p__opensans">Mon-Fri: 10:00AM - 02:00AM</p>
                <p className="p__opensans">Sat-Sun: 10:00AM - 03:00AM</p>

                <button className="custom__button" style={{ marginTop: "2rem" }}>Visit Us</button>
            </div>
        </div>

        <div className="app__wrapper_img">
            <img src={images.findus} alt="findus" />
        </div>
    </div>
)

export default FindUs