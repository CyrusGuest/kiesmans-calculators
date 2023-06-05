import React, { useState } from "react";

const VO2Calculator = ({ test, VO2Max, setVO2Max }) => {
  const [male, setMale] = useState(false);
  const [age, setAge] = useState("");
  const [lbs, setLbs] = useState("");
  const [walkTimeInMin, setWalkTimeInMin] = useState("");
  const [hr, setHr] = useState("");
  const [level, setLevel] = useState("");
  const [peakSpeed, setPeakSpeed] = useState("");
  const [timeCompleted, setTimeCompleted] = useState("");
  const [BMI, setBMI] = useState("");
  const [distance, setDistance] = useState("");
  const [kmCovered, setKmCovered] = useState("");

  const calculateVO2 = () => {
    let vo2;

    switch (test) {
      case "Rockport":
        vo2 =
          139.168 -
          0.388 * age -
          0.077 * lbs -
          3.265 * walkTimeInMin -
          0.156 * hr;

        if (male) vo2 += 6.318;
        break;
      case "Queens":
        vo2 = 111.33 - 0.42 * hr;
        break;
      case "Non-Exercise":
        break;
      case "Shuttle":
        const speed = 8 + 0.5 * level;

        vo2 = 31.025 + 3.238 * speed - 3.248 * age + 0.1536 * age * speed;
        break;
      case "Aero":
        vo2 = 5.73 * peakSpeed - 28.15;
        break;
      case "Bruce":
        vo2 =
          14.76 -
          1.379 * timeCompleted +
          0.451 * Math.pow(timeCompleted, 2) -
          0.012 * Math.pow(timeCompleted, 3);
        break;
      case "Balke":
        if (male) vo2 = 1.444 * timeCompleted + 14.99;
        if (!male) vo2 = 1.38 * timeCompleted + 5.22;
        break;
      case "2km":
        if (male)
          vo2 =
            184.9 - 4.65 * walkTimeInMin - 0.22 * hr - 0.26 * age - 1.05 * BMI;
        if (!male)
          vo2 =
            116.2 - 2.98 * walkTimeInMin - 0.11 * hr - 0.14 * age - 0.39 * BMI;
        break;
      case "Cooper":
        vo2 = 35.971 * distance - 11.288;
        break;
      case "15m":
        vo2 = 6.5 + 12.5 * kmCovered;
        break;
    }

    setVO2Max(vo2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setAge("");
    setBMI("");
    setDistance("");
    setHr("");
    setKmCovered("");
    setLbs("");
    setLevel("");
    setPeakSpeed("");
    setTimeCompleted("");
    setWalkTimeInMin("");

    calculateVO2();
  };

  return (
    <div className="mb-10">
      <div className="flex gap-6 mt-6 justify-center items-center">
        <button
          onClick={() => setMale(!male)}
          className={`btn ${
            male ? "bg-primary text-white" : "bg-white text-black"
          } shadow-lg text-3xl`}
        >
          Male
        </button>
        <button
          onClick={() => setMale(!male)}
          className={`btn ${
            male ? "bg-white text-black" : "bg-primary text-white"
          } shadow-lg text-3xl`}
        >
          Female
        </button>
      </div>

      <form className="flex flex-col text-center gap-4 mt-8">
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className={`${
            test === "Rockport" || test === "Shuttle" || test === "2km"
              ? "block"
              : "hidden"
          } outline-none bg-white shadow-lg rounded-lg btn`}
          type="text"
          placeholder="Age in years"
        />
        <input
          value={lbs}
          onChange={(e) => setLbs(e.target.value)}
          className={`${
            test === "Rockport" ? "block" : "hidden"
          } outline-none bg-white shadow-lg rounded-lg btn`}
          type="text"
          placeholder="Weight in lbs"
        />
        <input
          value={walkTimeInMin}
          onChange={(e) => setWalkTimeInMin(e.target.value)}
          className={`${
            test === "Rockport" || test === "2km" ? "block" : "hidden"
          } outline-none bg-white shadow-lg rounded-lg btn`}
          placeholder="Walk time in min"
        />
        <input
          value={hr}
          onChange={(e) => setHr(e.target.value)}
          className={`${
            test === "Rockport" || test === "Queens" || test === "2km"
              ? "block"
              : "hidden"
          } outline-none bg-white shadow-lg rounded-lg btn`}
          type="text"
          placeholder="Heart rate (bpm)"
        />
        <input
          value={BMI}
          onChange={(e) => setBMI(e.target.value)}
          className={`${
            test === "2km" ? "block" : "hidden"
          } outline-none bg-white shadow-lg rounded-lg btn`}
          type="text"
          placeholder="BMI"
        />

        <input
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className={`${
            test === "Shuttle" ? "block" : "hidden"
          } outline-none bg-white shadow-lg rounded-lg btn`}
          type="text"
          placeholder="Level (eg. 8)"
        />

        <input
          value={peakSpeed}
          onChange={(e) => setPeakSpeed(e.target.value)}
          className={`${
            test === "Aero" ? "block" : "hidden"
          } outline-none bg-white shadow-lg rounded-lg btn`}
          type="text"
          placeholder="Peak speed (km/hr)"
        />

        <input
          value={timeCompleted}
          onChange={(e) => setTimeCompleted(e.target.value)}
          className={`${
            test === "Bruce" || test === "Balke" ? "block" : "hidden"
          } outline-none bg-white shadow-lg rounded-lg btn`}
          type="text"
          placeholder="Total Time (eg. 9.5)"
        />

        <input
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          className={`${
            test === "Cooper" ? "block" : "hidden"
          } outline-none bg-white shadow-lg rounded-lg btn`}
          type="text"
          placeholder="Distance in miles"
        />

        <input
          value={kmCovered}
          onChange={(e) => setKmCovered(e.target.value)}
          className={`${
            test === "15m" ? "block" : "hidden"
          } outline-none bg-white shadow-lg rounded-lg btn`}
          type="text"
          placeholder="Kilometers covered"
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

export default VO2Calculator;
