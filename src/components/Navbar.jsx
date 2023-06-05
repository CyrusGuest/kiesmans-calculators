import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import menuDots from "../../images/menu-dots.svg";

const Navbar = () => {
  let { MobileNavOpen, setMobileNavOpen } = useContext(AppContext);

  return (
    <div className="flex">
      <Link to="/">
        <div className="flex flex-row mt-6 ml-4 w-36 md:w-52">
          <img src={logo} alt="" />
          <h1 className="font-bold ml-2">Coach Kiesman's Calculators</h1>
        </div>
      </Link>

      <div className="my-auto ml-auto hidden md:inline">
        <ul className="flex gap-6 mr-6 text-2xl font-bold ">
          <li className="my-auto hover:-rotate-6 hover:text-3xl duration-200">
            <Link to="/bmi">Body Mass Index (BMI)</Link>
          </li>
          <Link to="/vo2">
            <li className="my-auto cursor-pointer btn bg-primary text-white glow-on-hover shadow-lg py-2 mt-1 px-6 font-semibold rounded-md transition duration-300">
              VO2 Max
            </li>
          </Link>
        </ul>
      </div>
      <img
        onClick={() => setMobileNavOpen(!MobileNavOpen)}
        src={menuDots}
        alt=""
        className="my-auto ml-auto mr-4 float-right cursor-pointer md:hidden"
      />
    </div>
  );
};

export default Navbar;
