import React from "react";
import { FaGithub, FaLinkedin, FaPhp } from "react-icons/fa";
import wind from "../assets/wind.png";
import { FaPython, FaJava, FaWordpress, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiJavascript, DiDjango } from "react-icons/di";
import { SiCsharp, SiMysql, SiPostgresql, SiSqlite } from "react-icons/si";

function Home() {
  return (
    <div className="container-fluid">
      <div className="mt-5 pt-5 d-flex h-100 text-center text-white bg-dark ">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main className="px-3">
            <img
              src="https://camo.githubusercontent.com/14170a235cbc51d57384f64fb6b41e2126c3b4aeaf98dbd01425a1aad48e7961/68747470733a2f2f692e6962622e636f2f313079543950422f61726e6f6c642e706e67"
              alt="profile picture"
              className="rounded-circle img-w"
            />
            <div className="m-5">
              <h1>Anotida Arnold Mubaiwa</h1>
              <p className="lead">
                <h3>Graduate Programme</h3>
              </p>
              <div className="social-links mt-3 text-center">
                <a href="https://github.com/Arnold-A-Mubaiwa">
                  <FaGithub className="p-2 h_icons" />
                </a>
                <a href="https://www.linkedin.com/in/arnold-anotida-mubaiwa-75aa1816a/">
                  <FaLinkedin className="p-2 h_icons" />
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      <section className=" p-5 txt-sec">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              I am a Bachelors Of Sciences in Information Technology graduate
              living in Cape Town. I graduated in the year 2021 from Richfield.
              Below are my social media accounts where you can view my work and
              achievements.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 " data-aos="fade-right">
              <img src={wind} className="img-fluid img-n" alt="" />
            </div>
            <div className="col-lg-8 p-4 pt-lg-0 content" data-aos="fade-left">
              <div className="p-3">
                <h3>Certificates</h3>
                <div className="row">
                  <div className="col">
                    <h4>BSC IT</h4>
                    <p>
                      Graduated: August 2021
                      <br />
                      Richfield
                    </p>
                  </div>
                  <div className="col ">
                    <h4>DIT</h4>
                    <p>
                      Graduated: March 2021
                      <br />
                      Richfield
                    </p>
                  </div>
                </div>
              </div>
              <div className="pb-3">
                <h3>Programming Languages and Frameworks</h3>
                <FaJava className="icon_s p-2" alt=""></FaJava>
                <FaPython className="icon_s p-2" alt="" />
                <SiCsharp className="icon_s p-2" alt="" />
                <IoLogoJavascript className="icon_s p-2" alt="" />
                <DiJavascript className="icon_s p-2" alt="" />
                <FaPhp className="icon_s p-2" alt="" />
                <DiDjango className="icon_s p-2" alt="" />
                <FaWordpress className="icon_s p-2" alt="" />
                <FaBootstrap className="icon_s p-2" alt="" />
              </div>
              <div className="p-3">
                <h3>Databases</h3>
                <SiMysql className="icon_s p-2" alt="" />
                <SiPostgresql className="icon_s p-2" alt="" />
                <SiSqlite className="icon_s p-2" alt="" />
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h2 className="text-toupper">
        Why you want to be a developer at SovTech.
        </h2>
        </div>
    </div>
  );
}

export default Home;
