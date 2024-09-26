import React from "react";
function Team() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">People</h1>
      <div className="row">
        <div className="col-6 p-5 d-flex justify-content-end align-content-center ">
          <div
            className="text-center align-middle"
            style={{ width: "fit-content" }}
          >
            {/* Image is considered as text while aligning unlike div */}
            <img
              src="media/images/nithinKamath.jpg"
              style={{ width: "50%" }}
              className="rounded-circle"
            />
            <h5 className="mt-2">Nithin Kamath</h5>
            <p>Founder, CEO</p>
          </div>
        </div>
        <div className="col-6 p-5 justify-content-center align-content-center">
          <p style={{ fontSize: "1rem", lineHeight: "1.8" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.8" }}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.8" }}>
            Playing basketball is his zen.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.8" }}>
            Connect on{" "}
            <a href="#" className="text-decoration-none">
              Homepage
            </a>
            /
            <a href="#" className="text-decoration-none">
              {" "}
              TradingQnA
            </a>{" "}
            /
            <a href="#" className="text-decoration-none">
              {" "}
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
