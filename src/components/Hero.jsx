import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <h1 className="md:max-w-2xl max-w-sm mx-auto mt-20 md:mt-28 text-center text-4xl md:text-6xl font-bold">
        Calculate your <span className="text-gradient">VO2 Max</span> and{" "}
        <span className="text-gradient">Body Mass Index</span> (BMI)
      </h1>
      <h3 className="mt-8 md:max-w-2xl max-w-md mx-auto text-xl md:text-2xl text-[#999999] text-center">
        Objectively measure your fitness here.
      </h3>
      <div className="flex justify-center mt-10 space-x-6">
        <Link to="/vo2">
          <button className="text-xl md:text-2xl btn text-white bg-primary">
            VO2 Max
          </button>
        </Link>
        <Link to="/bmi">
          <button className="text-xl btn md:text-2xl btn shadow-lg bg-white text-primary">
            BMI
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
