import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="SupportHero">
      <div className="p-5 mt-5" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="#" className="text-white mx-5">
          Track Tickets
        </a>
      </div>
      <div className="row px-5 mx-5 mb-5 ">
        <div className="col-5 px-5 mx-5 mb-5 text-white">
          <h2 style={{ lineHeight: "2.7rem" }}>
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input
            type="text"
            id="SupportInput"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
          />
          <p className="mt-5">
            <a href="#" className="text-white mx-2 fs-5">
              Track account opening
            </a>
            <a href="#" className="text-white mx-2 fs-5">
              Track Segment activation
            </a>
            <a href="#" className="text-white mx-2 fs-5">
              Intraday
            </a>
            <a href="#" className="text-white mx-2 fs-5">
              Margins
            </a>
            <a href="#" className="text-white mx-2 fs-5">
              Kite User manuals
            </a>
          </p>
        </div>
        <div className="col-4 text-white mx-5">
          <h2>Featured</h2>
          <ol>
            <li>
              <a
                href=""
                className="text-white mx-2 fs-5"
                style={{ lineHeight: "2.7rem" }}
              >
                Current takeovers and Delisting - January 2025
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white mx-2 fs-5"
                style={{ lineHeight: "2.7rem" }}
              >
                Latest intraday leverages - MIS&CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
