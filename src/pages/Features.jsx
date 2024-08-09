import React from "react";
import { dollar, line } from "../assets/icons";
import { clock, globe } from "../assets/images";

const Features = () => {
  return (
    <section>
      {/* feature 1 */}
      <div className="relative flex flex-row mt-[170px]">
        <div className="w-3/5 h-[350px] bg-black"></div>
        <div className="absolute -top-2 -left-2 w-3/5 h-[350px] bg-purple border-4 border-black p-6">
          <div className="flex flex-row gap-10 justify-center">
            <img src={dollar}></img>
            <img src={line}></img>
            <img src={dollar}></img>
          </div>
          <div>
            <h1 className="mt-12 text-64 font-ibm text-white text-center">
              0.5% Only
            </h1>
          </div>
        </div>
        <div className="w-2/5 flex justify-center items-center">
          <h1 className="text-[40px] font-inter">
            Cheap fees <span className="font-bold">transfer</span>,
            <br /> no fixed cents.
          </h1>
        </div>
      </div>

      {/* feature 2 */}
      <div className="relative flex flex-row mt-[180px]">
        <div className="w-3/5 flex flex-col text-end pr-12">
          <h1 className="text-64 font-ibm font-bold ">Globally Available!</h1>
          <p className="text-2xl mt-5">
            We are expanding to over 110+ countries
          </p>
          <p className="text-2xl mt-20 ">See supported countries →</p>
        </div>
        <div className="absolute -right-14 -top-40">
          <img src={globe}></img>
        </div>
      </div>

      {/* feature 3 */}
      <div className="relative flex flex-row mt-[280px]">
        <div className="">
            <img src = {clock}></img>
        </div>
        <div className="mt-20 flex flex-col items-center ml-16">
          <h1 className="text-64 font-bold font-ibm">
            Time is money.
          </h1>
          <p className = "font-inter text-2xl mt-5">Real-time transfers and payouts <span className = "font-bold">WORLDWIDE!</span></p>
        </div>
      </div>
    </section>
  );
};

export default Features;
