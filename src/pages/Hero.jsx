import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-20">
      <div className="relative font-bold text-[64px] leading-none font-ibm text-center">
        <h1 className="absolute -left-[2px] top-[-2px] font-outline-2 text-yellow">
          Start to take
        </h1>
        <h1 className="font-outline-2">Start to take</h1>
        <h2>a change.</h2>
      </div>
      <div className = "mt-12 text-2xl text-center">
        <p>{" "}Instant and global transfers.<br/>What more could you ask for?</p>
      </div>
      <div className = "mt-12 flex">

      <Button text = "Get Started"></Button>
      </div>
    </section>
  );
};

export default Hero;
