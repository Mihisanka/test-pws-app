import React from 'react';
import './styles/Home.css';
import Services from './Service';
import AboutPage from './AboutPage';
import Footer from './Footer';
import ContactForm from './ContactForm';
//import BookingPage from  './BookingPage'
//import Footer from './Footer';

function HomePage() {
  return (
    <><div className="home-background">
      <div className="homepage">
      
        <div className="home-heading">
          <h4>Park Cloud</h4>
        </div>

        <div className="home-sub-heading">
          <p style={{ color: "black" }}>
          
            <b>Your trusted destination for hassle-free parking solutions.</b>
          </p>
        </div>
      </div>
      </div>  

          <>
          <Services/>
          </>
          {/* <>
          <BookingPage/>
          </> */}
          <>
          <AboutPage/>
          </>
          <>
          <ContactForm/>
          </>
          <>
          <Footer/>
          </>
        
    </>
  );
}

export default HomePage;

