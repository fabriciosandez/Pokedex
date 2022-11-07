import React, { useState } from "react";
import "../index.css";
import "../App.css";
import Homepage from "../components/homepage";

function Root() {
  return (
    <>
      <div>
        <div className="header">
          <img className="pokedex-logo" src="/images/logo.png" alt="Logo" />
        </div>
        <div>
          <Homepage/>
        </div>
      </div>
    </>
  );
}

export default Root;
