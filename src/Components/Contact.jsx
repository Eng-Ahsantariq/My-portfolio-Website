import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container contact" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icons"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      >
        <a
        href='https://www.instagram.com/ahsen__raja?igsh=eWY1eGg1d3g2Z2I5' target='_blank' className="items">
          <FaSquareInstagram className='icons'/>
        </a>
        <a
        href='https://www.facebook.com/share/19xsV94ayE/' target='_blank' className="items">
          <FaFacebook className='icons'/>
        </a>
        <a
        href='https://www.linkedin.com/in/raja-ahsan-tariq-' target='_blank' className="items">
          <FaLinkedin className='icons'/>
        </a>
        <a
        href='https://www.twitter.com' target='_blank' className="items">
          <FaXTwitter className='icons'/> 
        </a>
        <a
        href='https://www.github.com' target='_blank' className="items">
        <FaGithub className='icons'/>
        </a>
        <a
        href='mailto:rajaahsantariq@gmail.com' target='_blank' className="items">
          <SiGmail className='icons'/>
        </a>
      </div>
    </div>
  )
}

export default Contact