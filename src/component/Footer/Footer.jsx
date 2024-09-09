import './Footer.css'
import React from 'react'
import logo from "../../assets/logo.svg";

import usericon from '../../assets/usericon.svg'

const Footer=()=>{
    return(
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-left'>
                    <img className='themelogo' src={logo} alt=''/>
                    <p>I am a UI Developer from, India with 7 years of experience</p>
                </div>
                <div className='footer-top-right'>
                    <div className='footer-email-input'>
                        <img className='userimg' src={usericon} alt=''/>
                        <input type='email' placeholder='Enter your email' />
                    </div>
                    <div className='footer-subcribe'>
                        subcribe
                    </div>
                </div>
            </div>
            <hr/>
            <div className='footer-bottom'>
                <p className='footer-bottom-left'>Copyright Text</p>
                <div className='footer-bottom-right'>
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
            </div>
            
        </div>
    )
}

export default Footer