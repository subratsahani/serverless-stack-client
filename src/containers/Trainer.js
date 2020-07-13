import React, { useState } from "react";
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
import "./Trainer.css";

export default function Trainer() {

    return (
        <section class="trainer-section overflow-hidden spad">
          <div class="container">
            <div class="section-title text-center">
              <img src={require('../images/favicon.ico')} alt="" />
              <h2>Our Dancer Trainer</h2>
              <p>Practice New Age Fitness to take care of your body, soul and enjoy life more fully!</p>
            </div>
            <div class="trainer-slider owl-carousel">
              <div class="ts-item">
                <div class="trainer-item">
                  <div class="ti-img">
                    <img src={require('../images/trainer/Anupam.jpg')} alt="" />
                  </div>
                  <div class="ti-text">
                    <h4>AnupamZ</h4>
                    <h6>Zumba Trainer</h6>
                    <p>Anupam Z is an international Choreographer and spreading Bollywood,
                        Folk styles Sambalpuri folk in USA. He is specialist in Salsa, Contemporary, Bollywood and Zumba styles</p>
                    <div class="ti-social">
                      <a href="https://b-www.facebook.com/watch/Bworkz-Workout-110421260577022/" target="_blank"><i class="fa fa-facebook"></i></a>
                      <a href="https://www.instagram.com/anupamz_choreographer_/" target="_blank"><i class="fa fa-instagram"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="ts-item">
                <div class="trainer-item">
                  <div class="ti-img">
                    <img src={require('../images/trainer/2.png')} alt="" />
                  </div>
                  <div class="ti-text">
                    <h4>Lori Kennedy</h4>
                    <h6>Yoga Trainer</h6>
                    <p>Yoga & Therapy Certificate of Uttarakhand University Sanskrit</p>
                    <div class="ti-social">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-instagram"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ts-item">
                <div class="trainer-item">
                  <div class="ti-img">
                    <img src={require('../images/trainer/3.png')} alt="" />
                  </div>
                  <div class="ti-text">
                    <h4>Rebecca James</h4>
                    <h6>Yoga Trainer</h6>
                    <p>Yoga & Therapy Certificate of Uttarakhand University Sanskrit</p>
                    <div class="ti-social">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-instagram"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      );

}