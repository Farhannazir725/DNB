import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow py-2 px-2">
        <div className="container-fluid h-font">
          <Link className="navbar-brand h-font" to="/">
            <Typewriter 
              onInit={(typewriter) => {
                typewriter.typeString("Disco Noor Music Band").pauseFor(2000).deleteAll().typeString("Disco Noor Music Band").start();
              }}
            />
          </Link>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse align-items-end "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  {" "}
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/video" ? "active" : ""
                  }`}
                  to="/video  "
                >
                  Video
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/gallery" ? "active" : ""
                  }`}
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <div>
              <a
                href="/"
                className="btn outline mx-2 my-1 btn-dark h-font btn-sm "
                role="button"
                aria-disabled="true"
              >
                {" "}
                Inquiry +91- 9829278141, +91-9829864892{" "}
              </a>
              <a
                href="mailto: disconoorband@gmail.com"
                className="btn outline btn-dark mx-2 h-font btn-sm"
                role="button"
                aria-disabled="true"
              >
                Email: DiscoNoorBand@gmail.com
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
