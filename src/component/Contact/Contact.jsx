import React from "react";
import "./Contact.css";
import logo from "../../assets/logo.svg";
import email from '../../assets/mail.svg'
import location from '../../assets/location.svg'
import call from '../../assets/call2.svg'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "26052e5b-826d-459b-bb9c-37024629292e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      // setResult("Form Submitted Successfully");
      // event.target.reset();
      alert(data.message)
    } else {
      console.log("Error", data);
      setResult(data.message);
      
    }
  };


  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img className="contact-img" src={logo} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img className="icon-img" src={email} alt="" /><p>suresh.oneforce@gmail.com</p>
                </div>
                <div className="contact-detail">
                <img className="icon-img" src={call} alt="" /><p>+91 7411131348</p>
                </div>
                <div className="contact-detail">
                <img className="icon-img" src={location} alt="" /><p>Bangalore, India</p>
                </div>
                
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your Name" name="name"/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your Email" name="email"/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message"  rows='8' placeholder="Enter your message"  />

            <button className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
