import React from "react";

function Hero() {
  return (
    <div className="container " style={{ marginTop: "5.5rem" }}>
      <div className="row text-center my-5">
        <h1>Technology</h1>
        <p className="fs-5 mt-2">
          Sleek, modern and intuitive trading platforms
        </p>
        <p className="mt-2 mb-5">
          Check out our{" "}
          <a href="#" className="text-decoration-none">
            invest offerings &nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
      <hr style={{ opacity: "0.1" }} />
    </div>
  );
}

export default Hero;
