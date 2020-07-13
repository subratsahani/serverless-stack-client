import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import "./Home.css";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

export default function Home() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }

      try {
        const notes = await loadNotes();
        setNotes(notes);
      } catch (e) {
        onError(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [isAuthenticated]);

  function loadNotes() {
    return API.get("notes", "/notes");
  }


  function renderNotesList(notes) {
    return [{}].concat(notes).map((note, i) =>
      i !== 0 ? (
        <>
          <LinkContainer key={note.noteId} to={`/notes/${note.noteId}`}>
            <>
            <ListGroupItem header={note.content.trim().split("\n")[0]}>
              {"Status:" + note.content + "\n" + "Paid Date: " + new Date(note.createdAt).toLocaleString()}
            </ListGroupItem>
            <ListGroupItem><a href="https://zoom.us/" target="_blank"> Zoom Link </a></ListGroupItem>
            </>
          </LinkContainer>
        </>
      ) : (
          // <LinkContainer key="new" to="/notes/new">
          <LinkContainer key="new" to="/settings">
            <ListGroupItem>
              <h4>
                <b>{"\uFF0B"}</b> Pay Using Stripe
            </h4>
            </ListGroupItem>
          </LinkContainer>
        )
    );
  }

  function renderLander() {
    return (
      <>
        <div className="lander">
         <h1>New Age Fitness</h1>
          <p>Dance to your Fitness.
        <br></br>
            <p>Attend a class live and/or watch video later</p>
          </p> 
        </div>
        <div className="container-fluid">

          <div className="row justify-content-center">
          <CardDeck>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('../images/dancing-man.jpg')} />
              <Card.Body>
                <Card.Title>All Live Classes</Card.Title>
                <Card.Text>
                  Please create a profile and help us in keeping you fit. Pay as you go based on your needs.
                </Card.Text>
                {/* <Button variant="primary">Buy Live Classes</Button> */}
                <a href="/signup" className="btn btn-primary">Buy Live Classes</a>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('../images/dancinggirl.jpg')} />
              <Card.Body>
                <Card.Title>Pre recorded Classes</Card.Title>
                <Card.Text>
                  Please create a profile and practice with pre recorded videos based on your convinience.
                </Card.Text>
                <a href="/signup" className="btn btn-primary">Offline Self Practice</a>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('../images/patricia.jpg')} />
              <Card.Body>
                <Card.Title>Love Dancing</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <a href="/signup" className="btn btn-primary">Learn More</a>
              </Card.Body>
            </Card>
          </CardDeck>
          </div>
        </div>

        {/* <section className="class section" id="class">
          <div className="container">
            <div className="row">
             
              <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="400">
                <div className="class-thumb">
                  <div className="class-info">
                    <h3 className="mb-1">Yoga</h3>
                    <span><strong>Trained by</strong> - Bella</span>
                    <span className="class-price">$50</span>
                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">
                <div className="class-thumb">
                  <div className="class-info">
                    <h3 className="mb-1">Areobic</h3>
                    <span><strong>Trained by</strong> - Mary</span>
                    <span className="class-price">$66</span>
                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section> */}

        


        <section class="pricing-section spad">
          <div class="container">
            <div class="section-title text-center">
              <img src={require('../images/favicon.ico')} alt="" />
              <h2>Pricing plans</h2>
              <p>Practice NewAgeFitness routines to take care of your soul and enjoy life more fully!</p>
            </div>
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <div class="pricing-item begginer">
                <a href="/classes"><span className="clickDiv"></span></a>
                  <div class="pi-top">
                    <h4>Beginner</h4>
                  </div>
                  <div class="pi-price">
                    <h3>$5</h3>
                    <p>Per Session</p>
                  </div>
                  <ul>
                    <li>Take Up To 8 Session</li>
                    <li>Available To Anyone</li>
                    <li>Partial   Tutorial Included</li>
                    <li>Never Expires</li>
                  </ul>
                  {/* <a href="#" class="site-btn sb-line-gradient">Get started</a> */}
                  {/* <a href="/classes" className="btn btn-primary">Get started</a> */}
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="pricing-item Intermediate">
                <a href="/classes"><span className="clickDiv"></span></a>
                  <div class="pi-top">
                    <h4>Intermediate</h4>
                  </div>
                  <div class="pi-price">
                    <h3>$8</h3>
                    <p>Per Session</p>
                  </div>
                  <ul>
                    <li>Take Up To 8 Session</li>
                    <li>Available To Anyone</li>
                    <li>Partial Tutorial Included</li>
                    <li>Never Expires</li>
                  </ul>
                  {/* <a href="/classes" className="btn btn-primary">Get started</a> */}
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="pricing-item advanced">
                <a href="/classes"><span className="clickDiv"></span></a>
                  <div class="pi-top">
                    <h4>Advanced</h4>
                  </div>
                  <div class="pi-price">
                    <h3>$10</h3>
                    <p>Per Session</p>
                  </div>
                  <ul>
                    <li>Take Up To 7 Session</li>
                    <li>Advanced Dancers</li>
                    <li>Whole Song Tutorial</li>
                    <li>Never Expires</li>
                  </ul>
                  {/* <a href="/classes" className="btn btn-primary">Get started</a> */}
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="pricing-item professional">
                <a href="/classes"><span className="clickDiv"></span></a>
                  <div class="pi-top">
                    <h4>Professional</h4>
                  </div>
                  <div class="pi-price">
                    <h3>$20</h3>
                    <p>Per Session</p>
                  </div>
                  <ul>
                    <li>Take Up To 7 Session</li>
                    <li>Based on Merit</li>
                    <li>Whole Song Tutorial</li>
                    <li>Never Expires</li>
                  </ul>
                  {/* <a href="/classes" className="btn btn-primary">Get started</a> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="signup-section spad">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="signup-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.313602047864!2d-84.41689058426934!3d42.69708007916583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8822dd184ca0ce35%3A0xd0858504bc02f1dc!2s1800%20Shadywood%20Ln%2C%20Okemos%2C%20MI%2048864!5e0!3m2!1sen!2sus!4v1593060039979!5m2!1sen!2sus" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33245.297803635964!2d-73.76987401620775!3d40.704774398815005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1575866843291!5m2!1sen!2sbd" style={{border:0}} allowfullscreen=""></iframe>*/}
                  </div> 
              </div>
              <div class="col-lg-6">
                <div class="singup-text">
                  <h3>Contact Us</h3>
                  <p>To be invited to the nearest Cali center and get free physical advice to learn more about the program.</p>
                </div>
                <form class="singup-form">
                  <div class="row">
                    <div class="col-md-6">
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div class="col-md-6">
                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div class="col-md-6">
                      <input type="text" placeholder="Your Email" />
                    </div>
                    <div class="col-md-6">
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div class="col-md-12">
                      <textarea placeholder="Message"></textarea>
                      <a href="/signup" className="btn btn-primary">Send Message</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      </>
    );
  }

  function renderNotes() {
    return (
      <>
        <br></br>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-3">
              <div className="card card-inverse card-primary text-center">
                <img className="card-img-top" src={require('../images/team/Anupam.jpg')} alt="Dancing Man" />
                <div className="card-block">
                  <h4 className="card-title">Dance with Instructor</h4>
                  <p className="card-text">Zoom link for live lessons with Instructor. Link available after payment.</p>
                  <a href="/settings" className="btn btn-primary">Pay Using Stripe</a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card card-inverse card-primary text-center">
                <img className="card-img-top" src={require('../images/team/anupamz.jpg')} alt="Dancing Man" />
                <div className="card-block">
                  <h4 className="card-title">Offline Fitness</h4>
                  <p className="card-text">Practice with pre recorded videos based on your convinience.</p>
                  <a href="https://www.youtube.com/watch?v=mFlwGr6nuhk&list=PLkl_0nrWH4iHuj11eHof-IwXajN3TVfqt" target="_blank" className="btn btn-primary">Self Practice Video</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="notes">
          <h2>Your Live Link</h2>
          <ListGroup>
            {!isLoading && renderNotesList(notes)}
          </ListGroup>
        </div>
      </>
    );
  }

  return (
    <>
    <div className="Home">
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
    <hr></hr>
  </>
  );
}