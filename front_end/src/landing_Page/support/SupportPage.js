import React from "react";
import CreateTicket from "./CreateTicket";
import Hero from "./Hero";
import "../../index.css";
function SupportPage() {
  return (
    <div className="container-fluid">
      <Hero />
      <CreateTicket />
    </div>
  );
}

export default SupportPage;
