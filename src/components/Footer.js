import React from "react";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";

const Footer = () => (

  <footer className="bg-light p-3 text-center">
    <div className="logo" />
    <p>
      Sample project provided by <a href="https://auth0.com">Auth0</a>
    </p>
  </footer>
);

export default Footer;