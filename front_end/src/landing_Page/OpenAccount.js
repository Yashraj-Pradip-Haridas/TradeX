import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-1">Open a Zerodha account</h1>
        <p className="mb-5 fs-5">
          Modern platform and apps, &#x20B9;0, and flat &#x20B9;20 Intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
