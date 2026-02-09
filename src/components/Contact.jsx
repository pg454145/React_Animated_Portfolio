import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
        data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.linkedin.com/in/poojagiri-z37"
            target="_blank"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>
          <a
            href="https://github.com/pg454145"
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a href="mailto:pg454145@gmail.com" target="_blank" className="items">
            <SiGmail className="icons" />
          </a>
          <a
            href="https://www.instagram.com/natasha454145?utm_source=qr&igsh=MXJpcWd5YmYwczE1Mg=="
            target="_blank"
            className="items"
          >
            <IoLogoInstagram className="icons" />
          </a>
          <div className="items">
            <FaFacebookSquare className="icons" />
          </div>
          <div className="items">
            <SiX className="icons" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
