import React from "react";

import logo from "../assets/fingerprintjs-pro-logos-idpq058ug9.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="400" />
    <h1 className="mb-4">Device identification Demo</h1>

    <p className="lead">
      This is a sample application that demonstrates an authentication flow for
      an SPA, using <a href="https://reactjs.org">React.js</a>
    </p>
  </div>
);

export default Hero;
