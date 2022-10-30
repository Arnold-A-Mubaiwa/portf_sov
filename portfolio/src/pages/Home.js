import React from "react";
import { FaGithub,  FaLinkedin } from 'react-icons/fa'
import wind from "../assets/wind.png"
function Home() {
  return (
    <div>
    <div className="mt-5 pt-5 d-flex h-100 text-center text-white bg-dark ">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="px-3">
          <img
            src="https://camo.githubusercontent.com/14170a235cbc51d57384f64fb6b41e2126c3b4aeaf98dbd01425a1aad48e7961/68747470733a2f2f692e6962622e636f2f313079543950422f61726e6f6c642e706e67"
            alt="profile picture"
            className="rounded-circle img-w"
          />
          <h1>Anotida Arnold Mubaiwa</h1>
          <p className="lead">
            <h3>Graduate Programme</h3>
              </p>
          <div className="social-links mt-3 text-center">
          <a href="https://github.com/Arnold-A-Mubaiwa" className="p-2"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/arnold-anotida-mubaiwa-75aa1816a/" className="p-2"><FaLinkedin /></a>
          </div>
        </main>
      </div>
</div>

<section  className=" p-5 txt-sec">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>I am a Bachelors Of Sciences in Information Technology graduate living in Cape Town. I graduated in the year 2021 from Richfield.
            Below are my social media accounts where you can view my work and achievements.
        </p>
        </div>

        <div className="row">
          <div className="col-lg-4 " data-aos="fade-right">
            <img  src={wind}
 className="img-fluid img-n" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Programming Languages</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>language</strong> <span>1 May 1995</span></li>
                  </ul>
              </div>

            </div>
            <p>
            </p>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}

export default Home;
