import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-5">
        <div className="col-4">
          <h1 className="mb-5">Unbeatable Pricing</h1>
          <p style={{ fontSize: "1.1rem" }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none", fontSize: "1.2rem" }}>
            See pricing&nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row">
            <div className="col-6 text-center border p-5">
              <h1>&#x20B9;0</h1>
              <p style={{ width: "14rem", fontSize: "1rem" }} className="mt-4 ">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col-6 text-center border p-5">
              <h1>&#x20B9;20</h1>
              <p style={{ width: "14rem", fontSize: "1rem" }} className="mt-4 ">
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
