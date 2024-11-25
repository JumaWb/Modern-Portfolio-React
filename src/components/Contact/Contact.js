import React from "react";
import './Contact.css'
import mail_icon from '../../assets/mail.jpeg'
import location_icon from '../../assets/location.jpeg'
import call_icon from '../../assets/call.jpeg'



function Contact(){
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "88dbd91c-41a0-4469-bfa1-870f6b41bd2a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert(res.message);
        }
      };
    return(
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I am currently available to take on new projects or roles. Whether you're looking for a skilled developer for your next big idea or a reliable team member for your company, I’d love to collaborate and bring your vision to life.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon}alt="" /> <p>bjuma0985@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon}alt="" /> <p>+254740640525</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon}alt="" /> <p>Nairobi, Kenya</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>

        </div>
    )
};
export default Contact;