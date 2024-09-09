import React from "react";
import './Zero.css'
import profile from '../../assets/profile.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";

import resume from '../../assets/SureshUI.pdf'

const Zero = ()=>{
    return(
        <div id="home" className="zero">
            <img className="profileimage" src={profile} alt=""/>
            <h1><span className="">I'm Suresh,</span> UI-Dev based in India</h1>
            <p>
            Experienced Frontend Developer | Expertise in React, Angular, and Modern JavaScript | Passionate About Building Scalable and User-Centric Web Applications
            </p>
            <div className="zero-action">
                <div className="zero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="zero-resume"><a className="atag"  href = {resume} target = "_blank">My Resume</a>
                
                </div>
            </div>
        </div>
    )
}

export default Zero