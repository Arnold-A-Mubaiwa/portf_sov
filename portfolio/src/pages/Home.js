import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Home() {
  return (
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
            I am a Bachelors Of Sciences in Information Technology graduate living in Cape Town. I graduated inthe year 2021 from Richfield.
            Below are my social media accounts where you can view my work and achievements.
          </p>
          <div class="social-links mt-3 text-center">
          <a href="https://github.com/Arnold-A-Mubaiwa" className="p-2"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/arnold-anotida-mubaiwa-75aa1816a/" className="p-2"><FaLinkedin /></a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
