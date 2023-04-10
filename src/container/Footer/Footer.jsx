import React from "react"
import './Footer.css'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { FooterOverlay, Newsletter } from '../../components'
import { images } from '../../constants'

const Footer = () => (
    <div className="app__footer section__padding">
        <FooterOverlay />
        <Newsletter />

        <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h1 className="app__footer-headtext">Contact Us</h1>
                <p className="p__opensans">Seattle, Washington, 123rd 456th street</p>
                <p className="p__opensans">(123)-456-7890</p>
                <p className="p__opensans">(098)-765-4321</p>
            </div>
            <div className="app__footer-links_logo">
                <img src={images.gericht} alt="footer_logo" />
                <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others"</p>
                <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: '15px' }} />
                <div className="app__footer-links_icons">
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </div>
            <div className="app__footer-links_work">
                <h1 className="app__footer-headtext">Working Hours</h1>
                <p className="p__opensans">Mon-Fri: 10:00AM - 02:00AM</p>
                <p className="p__opensans">Sat-Sun: 10:00AM - 03:00AM</p>
            </div>
        </div>
        <div className="footer__copyright">
            <p className="p__opensans">2023 Christof Belisle. All rights reserved.</p>
        </div>
    </div>
)

export default Footer