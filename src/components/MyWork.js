import React, { Fragment } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { BsLaptop } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

function MyWork() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Something I've Built</h2>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-4 text-center my-2">
              <div
                id="carouselExampleControls1"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/ema1.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/ema2.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/ema3.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/ema4.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/ema5.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls1"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls1"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">EMA admin portal</h5>
              <div className="row d-flex justify-content-center">
                <a
                  href="http://ec2-35-171-134-229.compute-1.amazonaws.com/"
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                  target="_blank"
                >
                  <BsLaptop /> Watch Live
                </a>
              </div>
            </div>
            <div className="col-md-4 text-center my-2">
              <div
                id="carouselExampleControls2"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/whattoeat1.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/whattoeat2.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/whattoeat3.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/whattoeat4.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/whattoeat5.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls2"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls2"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div>
                <h5 className="ff-jose my-1">Food Delivery Application</h5>
                <div className="row d-flex justify-content-center">
                  <a
                    href="https://github.com/NilimaDambre/Food-Delivery-Application-In-React-JS"
                    className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                    target="_blank"
                  >
                    <AiFillGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center my-2">
              <div
                id="carouselExampleControls3"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/foodrecipe1.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/foodrecipe2.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/foodrecipe3.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/foodrecipe4.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls3"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls3"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">Food Recipe Website</h5>
              <div className="row d-flex justify-content-center">
                <a
                  href="https://github.com/NilimaDambre/Food-Recipe-Application-React-JS"
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                  target="_blank"
                >
                  <AiFillGithub /> Source Code
                </a>
              </div>
            </div>
            <div className="col-md-4 text-center my-2">
              <div
                id="carouselExampleControls4"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/ES1.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/ES2.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/ES3.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/ES4.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls4"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls4"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">Edge Security</h5>
              <div className="row d-flex justify-content-center">
                <a
                  href="https://edgesecurity.softcube.co.in/"
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                  target="_blank"
                >
                  <BsLaptop /> Watch Live
                </a>
              </div>
            </div>
            <div className="col-md-4 text-center my-2">
              <div
                id="carouselExampleControls5"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/NN1.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/NN2.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/NN3.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls5"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls5"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">N N Tax Services</h5>
              <div className="row d-flex justify-content-center">
                <a
                  href="https://nntaxservices.com/"
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                  target="_blank"
                >
                  <BsLaptop /> Watch Live
                </a>
              </div>
            </div>
            <div className="col-md-4 text-center my-2">
              <div
                id="carouselExampleControls6"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/PS1.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/PS2.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/PS3.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/PS4.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls6"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls6"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">Plaka Souvlaki</h5>
              <div className="row d-flex justify-content-center">
                <a
                  href="https://plakasouvlaki.softcube.co.in/"
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                  target="_blank"
                >
                  <BsLaptop /> Watch Live
                </a>
              </div>
            </div>
            <div className="col-md-4 text-center my-2">
              <div
                id="carouselExampleControls6"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/APT1.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/APT2.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/APT3.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/APT4.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls6"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls6"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">All Pro Title</h5>
              <div className="row d-flex justify-content-center">
                <a
                  href="https://allprotitle.softcube.co.in/"
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                  target="_blank"
                >
                  <BsLaptop /> Watch Live
                </a>
              </div>
            </div>
            <div className="col-md-4 text-center my-2">
              <div
                id="carouselExampleControls6"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/K1.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/K2.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/K3.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/K4.webp"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls6"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls6"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">Kirnan Consulting</h5>
              <div className="row d-flex justify-content-center">
                <a
                  href="https://kirnan.softcube.co.in/"
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                  target="_blank"
                >
                  <BsLaptop /> Watch Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MyWork;
