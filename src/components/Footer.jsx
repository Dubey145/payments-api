import React from "react";
import { logo, socials } from "../assets/icons";

const Footer = () => {
  return (
    <div className="w-full flex flex-row justify-between bg-white border-2 border-black p-12 mt-20">
      <img src={logo}></img>
      <div className="flex flex-row gap-12 font-ibm">
        <div>
          <h2 className="text-2xl font-bold">Service</h2>
          <p className = "mt-2">Business</p>
          <p>Enterprise</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">API</h2>
          <p className = "mt-2">Developer Contract</p>
          <p>Documentation</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className = "mt-2">Careers</p>
          <p>Investors</p>
        </div>
      </div>
      <img src={socials}></img>
    </div>
  );
};

export default Footer;
