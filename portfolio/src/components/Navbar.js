import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg  text-uppercase fixed-top nv-color">
        <div className="container">
          <a className="navbar-brand" href="#home">
           Arnold Mubaiwa 
          </a>
          <button
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <a className="nav-link  rounded" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link  rounded" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link  rounded" href="#sovtech">
                  why SovTech
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
