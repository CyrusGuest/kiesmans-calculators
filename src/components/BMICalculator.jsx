import React, { useState } from "react";

const BMICalculator = ({ setBMI }) => {
  const [height, setHeight] = useState("");
  const [lbs, setLbs] = useState("");

  const calculateBMI = () => {
    const BMI = (lbs / Math.pow(height, 2)) * 703;

    setBMI(BMI);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setHeight("");
    setLbs("");

    calculateBMI();
  };

  return (
    <div className="mb-10">
      <form className="flex flex-col text-center gap-4 mt-8">
        <input
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className={`outline-none bg-white shadow-lg rounded-lg btn`}
          type="text"
          placeholder="Height in inches"
        />
        <input
          value={lbs}
          onChange={(e) => setLbs(e.target.value)}
          className={`outline-none bg-white shadow-lg rounded-lg btn`}
          type="text"
          placeholder="Weight in lbs"
        />

        <button
          className="btn bg-primary text-white text-3xl mt-8"
          onClick={handleSubmit}
        >
          Calculate
        </button>
      </form>
    </div>
  );
};

export default BMICalculator;
