import React from "react";
import { Link } from "react-router-dom";
import MainGraphic from "../../images/endurance.png";

const LandingGraphic = () => {
  return (
    <div className="mb-36 mt-20 md:mt-28 lg:mt-60 flex flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16">
      <div className="lg:mr-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl md:text-5xl text-gradient font-bold">
          Respiratory Endurance
        </h1>

        <div className="max-w-xs md:max-w-2xl mt-4">
          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            Cardiorespiratory endurance measures how well the body performs
            during long periods of exercise. A person with high
            cardiorespiratory endurance can sustain high-intensity activities
            over an extended period without getting tired. Measuring a persons
            cardiorespiratory endurance involves examining how well their body
            takes in and utilizes oxygen.
          </p>

          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            When a person inhales, their lungs fill up with air and some of the
            oxygen it contains passes into the bloodstream. This oxygen-rich
            blood then travels to the heart, which circulates it around the body
            to the tissues and organs that need it. The muscles require an
            adequate supply of oxygen and other nutrients to work properly
            during high-intensity or extended periods of exercise.
          </p>
          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            If the muscles do not get enough nutrients, waste products begin to
            accumulate and cause fatigue. A persons level of cardiorespiratory
            endurance can directly affect their physical performance.most
            powerful sales tool.
          </p>
        </div>

        <Link
          to="/vo2"
          className="text-center btn xxw-72 font-bold bg-primary rounded-lg shadow-lg text-white glow-on-hover mt-10 text-2xl mx-auto"
        >
          Learn More
        </Link>
      </div>

      <img
        className="mx-auto w-3/5 lg:w-2/5 max-w-4xl lg:mt-20 lg:mb-40 flex"
        src={MainGraphic}
      />
    </div>
  );
};

export default LandingGraphic;
