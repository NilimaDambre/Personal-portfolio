import React, { Fragment } from "react";
import { SiCodechef, SiHackerrank } from "react-icons/si";

import { FiArrowDown,FiDownload } from "react-icons/fi";

function Resume() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 bg-dark slide-in-top">
          <div className="row align-items-center">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">NILIMA JAVADE</h2>
            </div>
            <div className="col-6">
              <h4 className="ff-jose fw-bold ls-2">
                <a
                  href="../file/NilimaJavadeResume.pdf"
                  download="Nilima Javade (Front End Developer).pdf"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  Resume
                </a>
                <FiDownload className="fs-5"  />
              </h4>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EXPERIENCE</h4>
              <ul>
              <li>
                  <h4 className="ff-jose my-1 text-red">Frontend Developer</h4>
                  <h6 className="blue-label px-2 py-1">May 2023 - Present</h6>
                  <p className="m-0">Softqube Technologies · Full-time</p>
                  <p>Ahmedabad, Gujarat, India</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    Junior Frontend Developer
                  </h4>
                  <h6 className="blue-label px-2 py-1">Oct 2022 - Apr 2023</h6>
                  <p className="m-0">Aimbrill TechInfo · Full-time</p>
                  <p>Ahmedabad, Gujarat, India</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    Trainee Frontend Developer
                  </h4>
                  <h6 className="blue-label px-2 py-1">Aug 2022 - Sep 2022</h6>
                  <p className="m-0">Aimbrill TechInfo · Full-time</p>
                  <p>Ahmedabad, Gujarat, India</p>
                </li>
              
              
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EDUCATION</h4>
              <ul>
              <li>
                  <h4 className="ff-jose my-1 text-red">M.Sc (Botany)</h4>
                  <h6 className="blue-label px-2 py-1">2020 - 2022</h6>
                  <p className="m-0">Singhania University</p>
                  <p>CGPA: 8.69</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">B.Ed</h4>
                  <h6 className="blue-label px-2 py-1">2018 - 2020</h6>
                  <p className="m-0">SNDT University</p>
                  <p>CGPA: 7.9</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">B.Sc (Botany)</h4>
                  <h6 className="blue-label px-2 py-1">2015 - 2018</h6>
                  <p className="m-0">Maharaja Sayajirao University, Vadodara</p>
                  <p>CGPA: 6.85</p>
                </li>
              
               
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">Hobies</h4>
              <ul>
                <li>
                  <h6 className="blue-label px-2 py-1">Reading Books</h6>
                </li>
                <li>
                  <h6 className="blue-label px-2 py-1">Cricket</h6>
                </li>
                <li>
                  <h6 className="blue-label px-2 py-1">Travelling</h6>
                </li>
                <li>
                  <h6 className="blue-label px-2 py-1">Designing</h6>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">Languages</h4>
              <ul>
                <li>
                  <h6 className="blue-label px-2 py-1">
                    English (Professional working proficiency)
                  </h6>
                </li>
                <li>
                  <h6 className="blue-label px-2 py-1">
                    Hindi (Full professional proficiency)
                  </h6>
                </li>
                <li>
                  <h6 className="blue-label px-2 py-1">Gujarati (Native)</h6>
                </li>
                <li>
                  <h6 className="blue-label px-2 py-1">
                    Marathi (Mother tongue)
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Resume;
