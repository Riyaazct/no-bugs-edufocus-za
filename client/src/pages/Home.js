import React from "react";
import "./Home.css";
import NavbarBlue from "../components/Navbar/NavbarBlue";
import Button from "@material-ui/core/Button"


function Home() {

  return <>
    <div className="home-page">
      <NavbarBlue />
      <section class='hero-wrap'>
        <div class='overlay'>
          <div class='content-wrap'>
            <div class='text-wrap'>
              <h3>The teacher is at the heart of everything we do</h3>
            </div>
            <div class='logo-wrap'>
              <img src='img-home/logo.webp' alt='big round logo EduFocus' />
            </div>
            <div className="buttons">
              <Button variant="contained" color="secondary" size="large" style={{ margin: "10px" }}>
                Programmes
              </Button>
              <Button variant="contained" color="primary" size="large" style={{ margin: "10px" }}>
                Partner with us
              </Button>
              <Button variant="contained" color="secondary" size="large" style={{ margin: "10px" }}>
                Support
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='welcome'>
          <h2>Welcome to EduFocus Projects.</h2>
          <p>EduFocus Projects NPO provides training, coaching and mentoring interventions to the
            education sector,  in alignment with Goal 4 of the Sustainable Development Goals
            (SDGs, 2015): QUALITY EDUCATION</p>
          <img className='svg1' src='img-home/green.svg' alt='green round shape' />
        </div>
        <div className='second-hero'>
          <img src='img-home/hero-second.png' alt='group of three people looking at a paper' />
        </div>
        <img className='svg2' src='img-home/blue.svg' alt='blue elliptical shape' />
      </section>
      <section className='programmes'>
        <h3>What Do We Do?</h3>
        <div className="container">
          <div className="text">
            <p>We empower and motivate teachers in South African schools by facilitating coaching,
              training, mentoring and motivational initiatives, special events and other research-based
              activities to amplify the teacher’s voice through reflexive practices.</p>
            <p>Our customized intervention programmes are dynamic and relevant to the contextual realities
              of the 21st century classroom.</p>
          </div>
          <div className='photos'>
            <img src='img-home/coaching.webp' alt='coaching' />
            <img src='img-home/training.webp' alt='training' />
            <img src='img-home/mentor.webp' alt='mentor' />
          </div>
        </div>
      </section>
    </div>
  </>
}

export default Home;
