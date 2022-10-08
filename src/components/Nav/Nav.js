import React from "react";
import './Nav.css'
import Lottie from "lottie-react";
import bookLogo from "../../assets/bookLogo.json";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="overflow-hidden bg-slate-100">
      <div className="flex items-center">
        <div className="w-32 ml-12  ">
          <Lottie animationData={bookLogo} loop={true} />
        </div>
        <div>
          <h1 className="text-3xl ml-[-18px]  font-bold text-red-400 italic">
            pro<span className="text-teal-400">Reader</span>
          </h1>
        </div>
        <div className="w-full">
          <ul className="flex justify-end mr-20 font-bold">
            <li>
              <NavLink to='/home' className={({isActive})=>isActive?'active':undefined}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/books'>
                Books 
            </NavLink>
            </li>
            <li>
              <NavLink to='/about'>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
