import React from "react";
function Brokerage() {
  return (
    <div className="container mt-5 ">
      <div className="row my-5 border-top p-5 ">
        <div className="col-8 ">
          <a href="#" className="linksUndecorated text-center">
            <h4 style={{ color: "#387ED1" }}>Brokerage Calculator</h4>
          </a>
          <ul className="mt-5">
            <li className="mb-3 text-muted">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li className="mb-3 text-muted">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="mb-3 text-muted">
              Physical copies of contract notes, if required, shall be charged
              20 per contract note. Courier charges apply.
            </li>
            <li className="mb-3 text-muted">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="mb-3 text-muted">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mb-3 text-muted">
              If the account is in debit balance, any order placed will be
              charged 40 per executed order instead of 20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 text-center">
          <a href="#" className="linksUndecorated">
            <h4 style={{ color: "#387ED1" }}>List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
