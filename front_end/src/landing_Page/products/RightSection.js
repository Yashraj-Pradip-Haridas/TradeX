import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  googlePLay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row align-items-center">
        <div className="col-5 mt-5 p-5 ">
          <h1 className="mt-4">{productName}</h1>
          <p
            style={{ fontSize: "1rem" }}
            className=" lh-lg w-75 tracking-widest mt-3"
          >
            {productDescription}
          </p>
          <div style={{ marginBottom: "30px" }}>
            <a href={learnMore} className="linksUndecorated">
              learnMore&nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div>
            <a href={googlePLay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
        <div className="col-7 mt-5 p-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
