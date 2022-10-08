import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import "./Home.css";
import Lottie from "lottie-react";
import readingBoy from "../../assets/readingBoy.json";

const Home = () => {
  return (
    <div className="grid grid-cols-2 mt-24">
      <div className="ml-20 mt-14">
        <p
          id="sell-badge"
          className="bg-yellow-300 rounded-2xl w-20 text-center font-semibold mb-2"
        >
          ON SALE!
        </p>

        <h1 className="font-bold text-4xl mb-3">
          A reader lives a <br /> thousand lives{" "}
          <span className="text-teal-400">before he dies</span>
        </h1>
        <p className="para mb-4">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </p>
        <div className="flex items-center">
          <Link to="/books">
            <button className="bg-teal-400 font-bold mr-6 text-white flex items-center px-4 py-3 rounded">
              <p>Visit Store</p>
              <ShoppingCartIcon className="w-6 h-6 text-white" />
            </button>
          </Link>
          <Link to="/about">
            <button className=" font-bold hover:text-teal-400">
              learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="w-96 home-pic">
        <Lottie animationData={readingBoy} loop={true} />
      </div>
    </div>
  );
};

export default Home;
