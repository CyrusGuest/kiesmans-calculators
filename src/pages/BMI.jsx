import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import BMICalculator from "../components/BMICalculator";

const BMI = () => {
  const [BMI, setBMI] = useState("");
  let { MobileNavOpen } = useContext(AppContext);

  return (
    <div className="font-Poppin dark:bg-brand-secondary transition-all">
      {MobileNavOpen ? <MobileNav /> : ""}

      <div className={MobileNavOpen ? "opacity-50" : "opacity-100"}>
        <Navbar />

        <div className="flex flex-col items-center mt-8 font-bold text-3xl">
          <h1 className="">🏃 BMI Calculator 🏃</h1>
          <p className="text-gray-400 text-sm font-normal text-center">
            None of this information will be stored, shared, or sold in ANY
            capacity. It is completely private.
          </p>

          <h1 className="text-2xl font-normal mt-8 text-center">
            BMI Result:{" "}
            <span className="text-gradient font-bold">{Math.round(BMI)}</span>
          </h1>

          <BMICalculator setBMI={setBMI} />
        </div>
      </div>
    </div>
  );
};

export default BMI;
