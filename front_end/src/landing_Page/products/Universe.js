import React from "react";
function Universe() {
  return (
    <div className="container mt-5 p-5">
      <div className="row text-center mt-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-4 justify-content-center text-center">
          <img src="media/images/smallcaseLogo.png" />
          <p
            className="text-small text-muted px-5 mt-2"
            style={{ fontSize: "13px" }}
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks of ETF's
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/sensibullLogo.svg" style={{ width: "50%" }} />
          <p
            className="text-small text-muted px-5 mt-3"
            style={{ fontSize: "13px" }}
          >
            Option trading platform that lets you create strategies, analyze
            positions and examine data points like open interest and more{" "}
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/goldenpiLogo.png" />
          <p
            className="text-small text-muted px-5 mt-2"
            style={{ fontSize: "13px" }}
          >
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains and more
          </p>
        </div>
        <div className="col-4 p-4 justify-content-center text-center">
          <img src="media/images/dittoLogo.png" style={{ width: "25%" }} />
          <p
            className="text-small text-muted px-5 mt-2"
            style={{ fontSize: "13px" }}
          >
            Personalized advice on life and health insurance. No spam and no
            miss-selling.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/streakLogo.png" style={{ width: "35%" }} />
          <p
            className="text-small text-muted px-5 mt-2"
            style={{ fontSize: "13px" }}
          >
            Systematic trading platform that allows you to create and backtest
            strategies without coding
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "40%" }}
          />
          <p
            className="text-small text-muted px-5 mt-2"
            style={{ fontSize: "13px" }}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for you goals
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 my-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Universe;
