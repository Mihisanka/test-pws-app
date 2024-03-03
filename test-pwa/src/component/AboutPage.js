import React from 'react';
import './styles/AboutPage.css'; // Import the CSS file for styling

function AboutPage() {
  return (
    <div className="about-section">
      <div className="about-heading">
        <h1>About Us Page</h1>
      </div>
      <div className='about-c'>
        <div className="about-box">
          <div className="about-image">
           {/* <img src="Park_Cloud/about.png" alt=""/>*/ }
         
          </div>
          {/* <h3>Service 4</h3>
              <p>Description of Service 4 goes here.</p> */}
        </div>
        <div className="about-txt">
          <h2>Some text about who we are and what we do.</h2>

          <p>"Welcome to Park Cloud Car Park, your trusted destination for hassle-free parking solutions.
            Our mission is to make parking effortless and stress-free for you. With a wide network of 
            secure and conveniently located parking facilities, we ensure that finding a parking spot 
            is never a challenge. Whether you're heading to work, exploring the city, or embarking on
            a journey, count on us for your parking needs. Say goodbye to parking woes and experience 
            the convenience of Park Cloud Car Park today."</p>
        </div>
      </div>


      


      <div  class="team-member">
      <h2 className="team-heading">Our Team</h2>
      </div>

      <div className="About-row">
              <div class="card-info">
                  <div class="card-border-top">
                  </div>
                  <div class="img">
                  </div>
                  <span>Mihisanka</span>
                  <p class="job"> Job Title</p>
                  <button> Click
                  </button>
              </div>

              <div class="card-info">
                  <div class="card-border-top">
                  </div>
                  <div class="img">
                  </div>
                  <span>Nayani</span>
                  <p class="job"> Job Title</p>
                  <button> Click
                  </button>
              </div>
      </div>
    </div>
  );
}

export default AboutPage;

