import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import headingPhoto from "../assets/images/heading.png";

import "../styles/Home.css";
import Services from "../components/Services";
import HelpingHand from "../components/HelpingHand";
import ContactForm from "../components/ContactForm";
import {useState , useEffect} from 'react'

function Home(){

    const [formData, setFormData] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

  function handleSubmit(){
    const request = {
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type': 'application/json'
        },
        redirect:'follow',
        referrerPolicy:'no-referrer',
        body: JSON.stringify({formData})
    };

    const myRequest = new Request("http://localhost:5000/contact",request);
    fetch(myRequest).then(function (response) {
        return response;
    }).then(function (response) {
        console.log(response);
    }).catch(function (e) {
        console.log(e);
    });
}


useEffect(()=>{
setFormData({
    firstName: firstName,
    lastName: lastName,
    email: email,
    subject: subject,
    message: message
});
},[firstName, lastName, email, subject, message]);
  return(
    <>
    <Navbar />
    <div className="container">
      <div className="heading" id="home">
        <div className="heading__info">
          <div className="heading__info__title">DocTalk</div>
          <div className="heading__info__subtitle">
            MedHelp just a click away...
          </div>
          <button className="heading__info__cta">Get In Touch</button>
        </div>
        <div className="heading__lcp">
          <img src={headingPhoto} alt="heading" width="600" height="600" />
        </div>
      </div>
      <div className="aboutus" id="about">
        <h4>About Us</h4>
        <div className="aboutus-container">
          <p className="aboutus-text">
            DocTalk is your ultimate medical help space. Here, at DocTalk you
            will be helped with all the services catering towards the medical
            field like Plasma donors' hospital beds oxygen suppliers medicine
            suppliers and ambulance providers. DocTalk is your one step
            solution. Just log into your account and book your appointment right
            away. you can even call us for your appointment, and we will get
            back to you shortly.
          </p>
        </div>
      </div>

      <Services />
      <HelpingHand />
      <ContactForm />


    </div>
    <Footer />
  </>
  )
}

export default Home;
