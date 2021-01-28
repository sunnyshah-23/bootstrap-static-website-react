import React from "react";
import web from "./images/1.svg";
import "./Home.css";
const Home = () => {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid bg_color">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  Grow your business with{" "}
                  <strong className="brand-name">Sunny</strong>{" "}
                </h1>
                <h2 className="my-3">
                  We are talented devlepers making websites
                </h2>
                <div className="mt-3">
                  <a href="#" className="btn-get-started">
                    Conatct Now
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animate" alt="home img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
