import React from 'react';
//import { Grid, Nav, NavItem } from 'react-bootstrap';
import "./Footer.css";
import "../css/font-awesome.min.css"

function Footer(/*props*/) {

  const year = new Date().getFullYear();
  return (
    <>
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget">
              <div className="about-widget">
                <img src={require('../images/favicon.ico')} alt="" />
                  {/* <p>Lorem ipsum dolor sit amet, consec-tetur adipiscing elit sed.</p> */}
                  <ul>
                    <li><i className="material-icons">phone</i>(408) 784 2361</li>
                    <li><i className="material-icons">email</i>contact@newagefitness.com</li>
                    <li><i className="material-icons">map</i>1800 Shadywood Ln,Okemos</li>
                  </ul>
	              </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget pl-0 pl-lg-5">
                <h2 className="fw-title">Company</h2>
                <ul>
                  <li><a href="#">Online Education</a></li>
                  <li><a href="#">Gallery</a></li>
                  <li><a href="#">Special Issues</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>

          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget">
              <h2 className="fw-title">About Us</h2>
              <ul>
                <li><a href="#">Our Vision</a></li>
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Meet The Team</a></li>
                <li><a href="#">Introduce</a></li>
                <li><a href="#">Customer Service</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="footer-widget pl-0 pl-lg-5">
              <h2 className="fw-title">Open time</h2>
              <ul>
                <li><i className="material-icons">alarm_on</i>Mon - Fri: 5:00pm - 08:45pm</li>
                <li><i className="material-icons">alarm_on</i>Sat - Sun: 3:00pm - 06:00pm</li>
              </ul>
            </div>
          </div>

          </div>


      <div className="footer-bottom">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
          <div className="col-md-8 text-md-right">
            <div className="copyright">
              Copyright <span>&copy; {year} All rights reserved.</span>
              This website is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by 
              <a href="/"> BackOffice Company Co</a>
            </div>
          </div>
        </div>
      </div>

      </div>

        {/* <div className="d-flex flex-column">
          <footer className="footer">
            <div>
              <a href="/">Copyright </a>
              <span>&copy; {year} All rights reserved.</span>
            </div>
            <div className="ml-auto">
              <span>Powered by </span>
              <a href="/">BackOffice Company Co</a>
            </div>
          </footer>
        </div> */}
    </>
  );
}

export default Footer;