import React from 'react';
import "./NewFooter.css";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewFooter = () => {
  return (
    <footer>
      <div className="row primary">
        <div className="column about">

          <h3>EduFocus</h3>

          <p>
            EduFocus Projects NPO provides training, coaching and mentoring
            interventions to the education sector.
          </p>

          <div className="social">
            <FontAwesomeIcon icon={faFacebook} className="icon"/>
            <FontAwesomeIcon icon={faEnvelope} className="icon"/>
            <FontAwesomeIcon icon={faWhatsapp} className="icon"/>
            <FontAwesomeIcon icon={faPhone} className="icon"/>
          </div>
        </div>

        <div className="column links">
          <h3>Company</h3>

          <ul>

            <li>
              <a href="#term-of-service">Term of service</a>
            </li>
            <li>
              <a href="#cookies-policy">Cookies Policy</a>
            </li>
            <li>
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="#our-programmes">OUR PROGRAMMES</a>
            </li>
          </ul>

        </div>


        <div className="column links">
          <h3>About</h3>
          <ul>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#our-photos">Our Photos</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>

        <div className="column subscribe">
          <h3>Newsletter</h3>
          <div>
            <input type="email" placeholder="Your email here" />
            <button>SUBMIT</button>
          </div>

        </div>

      </div>

      <div className="row copyright">
        <div className="footer-menu">

          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
          <a href="">Social</a>

        </div>
        <p>© 2023 Copyright: Edufocus</p>
      </div>
    </footer>
  )
}



export default NewFooter