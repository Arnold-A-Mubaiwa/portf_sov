import React from "react";
import { FaGithub, FaLinkedin, FaPhp } from "react-icons/fa";
import app_dev from "../assets/app-development.png";
import web_sec from "../assets/web-security.png";
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
                <a target="_blank" href="https://github.com/Arnold-A-Mubaiwa">
                  <FaGithub className="p-2 h_icons" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/arnold-anotida-mubaiwa-75aa1816a/"
                >
                  <FaLinkedin className="p-2 h_icons" />
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      <section className=" p-5 txt-sec" id="about">
        <div className="container">
          <div className="section-title">
            <h2 className="text-cap">About</h2>
            <p>
              I am a Bachelor Of Science in Information Technology graduate,
              living in Cape Town. I graduated in the year 2021 from Richfield.
              Below are the qualifications that I have obtained, including the
              programming languages and databases I understand.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 pt-5" data-aos="fade-right">
              <img src={app_dev} className="img-fluid img-n" alt="" />
            </div>
            <div className="col-lg-8 p-4 pt-lg-0 content" data-aos="fade-left">
              <div className="p-3">
                <h3 className="">Certificates</h3>
                <div className="row">
                  <div className="col-sm cert m-2 p-2">
                    <h4>Bachelor Of Science in Information Technology</h4>
                    <p>
                      Graduated: August 2021
                      <br />
                      Richfield
                    </p>
                  </div>
                  <div className="col-sm m-2 cert p-2 ">
                    <h4>Diploma in Information Technology</h4>
                    <p>
                      Graduated: March 2020
                      <br />
                      Richfield
                    </p>
                  </div>
                </div>
              </div>
              <div className="pb-3">
                <h3 className="">Programming Languages and Frameworks</h3>
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
                <h3 className="">Databases</h3>
                <SiMysql className="icon_s p-2" alt="" />
                <SiPostgresql className="icon_s p-2" alt="" />
                <SiSqlite className="icon_s p-2" alt="" />
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <div className="row txt-sec" id="sovtech">
        <h2 className="text-cap">
          Why do I want to be a developer at SovTech.
        </h2>
        <div className="col-sm-8 ml-5 p-5 text-justify">
          <p className="text-justify">
            This programme will be a learning and growth opportunity for me as I
            will be entering the industry. It will enable me to learn from those
            with industry experience in development.
          </p>
          <p className="text-left">
            It will enable me to develop my skill, applying my current knowledge
            in building world-class applications under experienced software
            developers.
          </p>
          <p className="text-justify">
            Moreover, SovTech represents innovation, change, efficiency and
            positivity, which all represents growth. I want to be part of this
            as I strongly believe in growth because growth is one superpower
            everyone can obtain.
          </p>
          <h3 className="pt-3">
            That's why I want to be part of this world-class company. Thank You!
          </h3>
          
        </div>

        <div className="col-sm p-5" data-aos="fade-right">
          <img src={web_sec} className="img-fluid img-n" alt="bg " />
        </div>
      </div>
    </div>
  );
}

export default Home;
