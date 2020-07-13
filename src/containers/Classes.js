
import React, { useState } from "react";
import "./Classes.css";
// import { useHistory } from "react-router-dom";
// import {
//   FormGroup,
//   FormControl,
//   FormLabel
// } from "react-bootstrap";
// import LoaderButton from "../components/LoaderButton";
// import { useAppContext } from "../libs/contextLib";
// import { useFormFields } from "../libs/hooksLib";
// import { onError } from "../libs/errorLib";
// import { Auth } from "aws-amplify";


export default function Classes() {

    return (
        <section class="classes-section spad">
            <div class="container">
                <div class="section-title text-center">
                    <img src={require('../images/favicon.ico')} alt="" />
                    <h2>Popular Classes</h2>
                    <p>Practice NewAgeFitness routines to take care of your soul and enjoy life more fully!</p>
                </div>
                <div >
                    <div class="owl-stage-outer"><div class="owl-stage"><div class="owl-item cloned"><div class="classes-item">
                        <div class="ci-img">
                            <img src={require('../images/classes/bworks.jpg')} alt="" />
                        </div>
                        <div class="ci-text">
                            <h4>Traditional Zumba</h4>
                            <div class="ci-metas">
                                <div class="ci-meta"><i class="material-icons">event_available</i>Mon, Wed, Fri</div>
                                <div class="ci-meta"><i class="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                            </div>
                            <p>Traditional Zumba Excercises followed by cool down</p>
                        </div>
                        <div class="ci-bottom">
                            <div class="ci-author">
                                <img src={require('../images/classes/author/Anupam-1.jpg')} alt="" />
                                <div class="author-text">
                                    <h6>AnupamZ</h6>
                                    <p>Zumba Trainer</p>
                                </div>
                            </div>
                            {/* <a href="" class="site-btn sb-gradient">book now</a> */}
                            <a href="/settings" className="btn btn-primary">Book Now</a>
                        </div>
                    </div></div><div class="owl-item cloned" ><div class="classes-item">
                        <div class="ci-img">
                            <img src={require('../images/classes/rangabati.jpg')} alt="" />
                        </div>
                        <div class="ci-text">
                            <h4>Zumba on Folk Songs</h4>
                            <div class="ci-metas">
                                <div class="ci-meta"><i class="material-icons">event_available</i>Tues, Thurs</div>
                                <div class="ci-meta"><i class="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                            </div>
                            <p>Dance to your fitness on Folk songs from various parts of India</p>
                        </div>
                        <div class="ci-bottom">
                            <div class="ci-author">
                                <img src={require('../images/classes/author/Anupam-1.jpg')} alt="" />
                                <div class="author-text">
                                    <h6>AnupamZ</h6>
                                    <p>Zumba Trainer</p>
                                </div>
                            </div>
                            <a href="/settings" className="btn btn-primary">Book Now</a>
                        </div>
                    </div></div>
                    {/* <div class="owl-item cloned"><div class="classes-item">
                        <div class="ci-img">
                            <img src={require('../images/classes/2.jpg')} alt="" />
                        </div>
                        <div class="ci-text">
                            <h4>Traditional Hatha</h4>
                            <div class="ci-metas">
                                <div class="ci-meta"><i class="material-icons">event_available</i>Mon, Wed, Fri</div>
                                <div class="ci-meta"><i class="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                            </div>
                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                        </div>
                        <div class="ci-bottom">
                            <div class="ci-author">
                                <img src={require('../images/classes/author/Anupam.jpg')} alt="" />
                                <div class="author-text">
                                    <h6>Victoria Webb</h6>
                                    <p>Yoga Trainer</p>
                                </div>
                            </div>
                            <a href="/signup" className="btn btn-primary">Book Now</a>
                        </div>
                    </div></div>
                    <div class="owl-item" ><div class="classes-item">
                        <div class="ci-img">
                            <img src={require('../images/classes/1.jpg')} alt="" />
                        </div>
                        <div class="ci-text">
                            <h4><a href="classes-details.html">Artistic Yoga</a></h4>
                            <div class="ci-metas">
                                <div class="ci-meta"><i class="material-icons">event_available</i>Mon, Wed, Fri</div>
                                <div class="ci-meta"><i class="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                            </div>
                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                        </div>
                        <div class="ci-bottom">
                            <div class="ci-author">
                                <img src={require('../images/classes/author/Anupam.jpg')} alt="" />
                                <div class="author-text">
                                    <h6>Victoria Webb</h6>
                                    <p>Yoga Trainer</p>
                                </div>
                            </div>
                            <a href="/signup" className="btn btn-primary">Book Now</a>
                        </div>
                    </div></div>
                    <div class="owl-item active" ><div class="classes-item">
                        <div class="ci-img">
                            <img src={require('../images/classes/2.jpg')} alt="" />
                        </div>
                        <div class="ci-text">
                            <h4>Traditional Hatha</h4>
                            <div class="ci-metas">
                                <div class="ci-meta"><i class="material-icons">event_available</i>Mon, Wed, Fri</div>
                                <div class="ci-meta"><i class="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                            </div>
                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                        </div>
                        <div class="ci-bottom">
                            <div class="ci-author">
                                <img src={require('../images/classes/author/2.jpg')} alt="" />
                                <div class="author-text">
                                    <h6>Victoria Webb</h6>
                                    <p>Yoga Trainer</p>
                                </div>
                            </div>
                            <a href="/signup" className="btn btn-primary">Book Now</a>
                        </div>
                    </div></div>
                    <div class="owl-item active" ><div class="classes-item">
                        <div class="ci-img">
                            <img src={require('../images/classes/3.jpg')} alt="" />
                        </div>
                        <div class="ci-text">
                            <h4>Yoga Therapy</h4>
                            <div class="ci-metas">
                                <div class="ci-meta"><i class="material-icons">event_available</i>Mon, Wed, Fri</div>
                                <div class="ci-meta"><i class="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                            </div>
                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                        </div>
                        <div class="ci-bottom">
                            <div class="ci-author">
                                <img src={require('../images/classes/author/3.jpg')} alt="" />
                                <div class="author-text">
                                    <h6>Victoria Webb</h6>
                                    <p>Yoga Trainer</p>
                                </div>
                            </div>
                            <a href="/signup" className="btn btn-primary">Book Now</a>
                        </div>
                    </div></div>
                    <div class="owl-item active" ><div class="classes-item">
                        <div class="ci-img">
                            <img src={require('../images/classes/2.jpg')} alt="" />
                        </div>
                        <div class="ci-text">
                            <h4>Traditional Hatha</h4>
                            <div class="ci-metas">
                                <div class="ci-meta"><i class="material-icons">event_available</i>Mon, Wed, Fri</div>
                                <div class="ci-meta"><i class="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                            </div>
                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                        </div>
                        <div class="ci-bottom">
                            <div class="ci-author">
                                <img src={require('../images/classes/author/2.jpg')} alt="" />
                                <div class="author-text">
                                    <h6>Victoria Webb</h6>
                                    <p>Yoga Trainer</p>
                                </div>
                            </div>
                            <a href="/signup" className="btn btn-primary">Book Now</a>
                        </div>
                    </div></div>
                    <div class="owl-item cloned" ><div class="classes-item">
                        <div class="ci-img">
                            <img src={require('../images/classes/1.jpg')} alt="" />
                        </div>
                        <div class="ci-text">
                            <h4><a href="classes-details.html">Artistic Yoga</a></h4>
                            <div class="ci-metas">
                                <div class="ci-meta"><i class="material-icons">event_available</i>Mon, Wed, Fri</div>
                                <div class="ci-meta"><i class="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                            </div>
                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                        </div>
                        <div class="ci-bottom">
                            <div class="ci-author">
                                <img src={require('../images/classes/author/1.jpg')} alt="" />
                                <div class="author-text">
                                    <h6>Victoria Webb</h6>
                                    <p>Yoga Trainer</p>
                                </div>
                            </div>
                            <a href="/signup" className="btn btn-primary">Book Now</a>
                        </div>
                    </div></div>
                    <div class="owl-item cloned" ><div class="classes-item">
                        <div class="ci-img">
                            <img src={require('../images/classes/2.jpg')} alt="" />
                        </div>
                        <div class="ci-text">
                            <h4>Traditional Hatha</h4>
                            <div class="ci-metas">
                                <div class="ci-meta"><i class="material-icons">event_available</i>Mon, Wed, Fri</div>
                                <div class="ci-meta"><i class="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                            </div>
                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                        </div>
                        <div class="ci-bottom">
                            <div class="ci-author">
                                <img src={require('../images/classes/author/2.jpg')} alt="" />
                                <div class="author-text">
                                    <h6>Victoria Webb</h6>
                                    <p>Yoga Trainer</p>
                                </div>
                            </div>
                            <a href="/signup" className="btn btn-primary">Book Now</a>
                        </div>
                    </div></div> */}
                    <div class="owl-item cloned" ><div class="classes-item">
                        <div class="ci-img">
                            <img src={require('../images/classes/malhari.jpg')} alt="" />
                        </div>
                        <div class="ci-text">
                            <h4>Bollyworks Zumba</h4>
                            <div class="ci-metas">
                                <div class="ci-meta"><i class="material-icons">event_available</i>Mon, Wed, Fri</div>
                                <div class="ci-meta"><i class="material-icons">alarm_on</i>06:30pm - 07:45pm</div>
                            </div>
                            <p>Dance to your fitness with Bollywood Music</p>
                        </div>
                        <div class="ci-bottom">
                            <div class="ci-author">
                                <img src={require('../images/classes/author/Anupam-1.jpg')} alt="" />
                                <div class="author-text">
                                    <h6>AnupamZ</h6>
                                    <p>Zumba Trainer</p>
                                </div>
                            </div>
                            <a href="/settings" className="btn btn-primary">Book Now</a>
                        </div>
                    </div></div> 
                    </div></div>
                </div>
            </div>
        </section>
    );
}