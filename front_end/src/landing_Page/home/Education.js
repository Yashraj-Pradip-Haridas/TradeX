import React from "react";

function Education() {
  return (
    <div className="container mb-5 mt-5">
      <div className="row mt-5">
        <div className="col-6 p-5">
          <img src="media/images/education.svg" alt="" />
        </div>
        <div className="col-6 p-4 mt-3">
          <h1 className="mb-5">Free and open market education</h1>
          <p className="mb-3" style={{ fontSize: "1.1rem" }}>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to the advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none", fontSize: "1.2rem" }}>
            Varsity&nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mb-3 mt-5" style={{ fontSize: "1.1rem" }}>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" style={{ textDecoration: "none", fontSize: "1.2rem" }}>
            TradingQ&A&nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
