import  './Navbar.css'
import  React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import logo from '../../assets/logo.svg'
import toggle from '../../assets/toggle.svg'
import tclose from '../../assets/tclose.svg'
import highlight from '../../assets/highlight.svg'

const Navbar = () =>{

    const [menu, setMenu] = useState()
    const meunRef = useRef()

    const openMenu=()=>{
        meunRef.current.style.right = "0px"
    }
    const closeMenu=()=>{
        meunRef.current.style.right = "-350px"
    }

    return (
        <div className='navbar'>
            <img className='imglogo' src={logo} alt=''/>
            <img  className='imgtoggle' src={toggle} onClick={openMenu} alt=''/>
            <ul ref={meunRef} className='nav-menu'>
            <img className='imgtclose' src={tclose} onClick={closeMenu} alt=''/>
                <li><AnchorLink className='anchor-link'  href='#home' ><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu === "home"?<img className='highimg' src={highlight} alt='' /> :<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu === "about"?<img className='highimg' src={highlight} alt='' /> :<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu === "services"?<img className='highimg' src={highlight} alt='' /> :<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work"?<img className='highimg' src={highlight} alt='' /> :<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact"?<img className='highimg' src={highlight} alt='' /> :<></>}</li>
            </ul>
            <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with me</AnchorLink></div>
        </div>
    )
}

export default Navbar