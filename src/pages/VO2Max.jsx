import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import VO2Calculator from "../components/VO2Calculator";

const VO2Max = () => {
  const [test, setTest] = useState("selected");
  const [VO2Max, setVO2Max] = useState("");
  let { MobileNavOpen } = useContext(AppContext);

  return (
    <div className="font-Poppin dark:bg-brand-secondary transition-all">
      {MobileNavOpen ? <MobileNav /> : ""}

      <div className={MobileNavOpen ? "opacity-50" : "opacity-100"}>
        <Navbar />

        <div className="flex flex-col items-center mt-8 font-bold text-3xl">
          <h1 className="">💪 VO2 Max Calculator 💪</h1>
          <p className="text-gray-400 text-sm font-normal text-center">
            None of this information will be stored, shared, or sold in ANY
            capacity. It is completely private.
          </p>

          <h1 className="text-2xl font-normal mt-8 text-center">
            VO2 Max Result:{" "}
            <span className="text-gradient font-bold">
              {Math.round(VO2Max)}
            </span>
          </h1>

          <select
            onChange={(e) => setTest(e.target.value)}
            value={test}
            name="test"
            id="test"
            className="outline-none border-none font-bold text-center text-white bg-primary rounded-lg shadow-lg p-2 mt-2 text-xl"
          >
            <option value="selected" selected>
              Select Test
            </option>
            <option value="Rockport">Rockport Walk</option>
            <option value="Queens">Queens College Step</option>
            <option value="Non-Exercise">Non-Exercise</option>
            <option value="Shuttle">20 Meter Shuttle</option>
            <option value="Aero">Aero Test</option>
            <option value="Bruce">Bruce Protocol</option>
            <option value="Balke">Balke Treadmill</option>
            <option value="2km">2KM Walk</option>
            <option value="Cooper">Cooper Test</option>
            <option value="15m">15 Minute Balke</option>
          </select>

          <VO2Calculator test={test} VO2Max={VO2Max} setVO2Max={setVO2Max} />
        </div>
      </div>
    </div>
  );
};

export default VO2Max;
