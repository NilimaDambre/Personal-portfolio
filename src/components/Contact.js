import React, { Fragment } from "react";
import { SiCodechef, SiHackerrank } from "react-icons/si";

function Contact() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 bg-dark slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">NILIMA JAVADE</h2>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-12">
              <h4 className="ff-jose ls-2">CONTACT</h4>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">Mobile No</h4>
                  <h6 className="blue-label px-2 py-1">
                    <a
                      href="tel:+917383869196"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      +917383869196
                    </a>
                  </h6>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Email Address</h4>
                  <h6 className="blue-label px-2 py-1">
                    <a
                      href="mailto:dambre.nilima@gmail.com"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      dambre.nilima@gmail.com
                    </a>
                  </h6>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Address</h4>
                  <h6 className="blue-label px-2 py-1">
                    C-504, Gopinath Pride, Near Bapasitaram chawk, <br/> Nava Naroda, Ahmedabad - 382330
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">LinkedIn</h4>
                  <h6 className="blue-label px-2 py-1">
                    <a
                      href="https://www.linkedin.com/in/nilima-javade-frontend-developer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      https://www.linkedin.com/in/nilima-javade-frontend-developer
                    </a>
                  </h6>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Github</h4>
                  <h6 className="blue-label px-2 py-1">
                    <a
                      href="https://github.com/NilimaDambre"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      https://github.com/NilimaDambre
                    </a>
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

export default Contact;
