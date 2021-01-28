import React from "react";
const Contact = () => {
  return (
    <div className="my-5">
      <h1 className="text-center">Contact us</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto">
            <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button className="col-12 btn btn-outline-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
