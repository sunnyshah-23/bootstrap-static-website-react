import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div className="my-5">
      <h1 className="text-center">Our services</h1>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="row gy-4">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
