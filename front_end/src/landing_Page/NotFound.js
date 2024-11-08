import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5">
      <div className="row text-center mt-5 justify-content-center">
        <img src="media/images/Error.png" style={{ width: "30%" }} />
        {/* <h1 className="mt-5 mb-1 text-danger">
          404 <br /> Page Not Found
        </h1> */}
        <p className="text-danger">
          Sorry, the page you are looking for does not exist
        </p>
        <Link to="/">
          <button
            className="p-2 btn btn-primary fs-5 mt-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
