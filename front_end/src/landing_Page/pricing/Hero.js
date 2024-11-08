import React from "react";
function Hero() {
  return (
    <div className="container justify-content-center">
      <div className="row my-5 p-5 text-center border-bottom ">
        <h1>Pricing</h1>
        <p className="fs-5 mt-2">
          Free equity investments and &#8377;20 intraday and F&O trades
        </p>
      </div>
      <div className="row my-5 p-5">
        <div className="col-4 text-center">
          <img src="./media/images/pricing0.svg" />
          <h2>Free equity delivery</h2>
          <p className="m-3  text-muted">
            All equity delivery investments (NSE, BSE) are absolutely
            free-&#8377; Brokerage
          </p>
        </div>
        <div className="col-4 text-center">
          <img src="./media/images/intradayTrades.svg" />
          <h2>Intraday and F&O Trades</h2>
          <p className="m-3 text-muted">
            Flat &#8377;20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 text-center">
          <img src="./media/images/pricingMF.svg" />
          <h2>Free direct MF</h2>
          <p className="m-3 text-muted">
            All direct mutual funds are absolutely free with tax &#8377;0
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
