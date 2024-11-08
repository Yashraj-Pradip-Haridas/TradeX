import React from "react";

function Stats() {
  return (
    <div className="container p-5 my-5">
      <div className="row mt-5 mb-5">
        <div className="col-6 p-5">
          <h1 className="fs-1">Trust with confidence</h1>
          <h2 className="fs-4 mt-5">Customer-First always</h2>
          <p
            className="lh-lg mt-1 text-start text-wrap"
            style={{ fontSize: "1.1rem" }}
          >
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h2 className="fs-4 mt-5 ">No spam or gimmicks</h2>
          <p
            className="lh-lg mt-1 text-start text-wrap"
            style={{ fontSize: "1.1rem" }}
          >
            {" "}
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4 mt-5">The Zerodha universe</h2>
          <p
            className="lh-lg mt-1 text-start text-wrap"
            style={{ fontSize: "1.1rem" }}
          >
            {" "}
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4 mt-5">Do better with money</h2>
          <p
            className="lh-lg mt-1 text-start text-wrap"
            style={{ fontSize: "1.1rem" }}
          >
            {" "}
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "125%" }} />
          <div className="text-center">
            <a
              className="mx-5"
              href="#"
              style={{
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              Explore our products&nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" style={{ textDecoration: "none", fontSize: "1.2rem" }}>
              Try Kite Demo&nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
