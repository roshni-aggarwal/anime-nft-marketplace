import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-48 my-16 flex items-center gap-20">
      <div className="flex flex-col gap-5 w-1/2 p-4">
        <h1 className="text-5xl font-bold ">DISCOVER EXCLUSIVE ANIME NFT</h1>
        <p className="text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          obcaecati in voluptas quidem quia corrupti? Totam fuga fugiat facilis
          molestias temporibus. Reprehenderit tempore officia eligendi nemo,
          nulla fugiat? Aliquam, aperiam!
        </p>
        <div className="flex gap-6 items-center">
          <Link
            to={"/market"}
            className="px-4 py-2 border-2 border-r-4 border-b-4 border-black bg-blue-400 font-medium shadow-lg"
          >
            Buy
          </Link>
          <Link
            to={""}
            className="px-4 py-2 border-2 border-r-4 border-b-4 border-black bg-blue-400 font-medium shadow-lg"
          >
            Sell
          </Link>
        </div>
          </div>
          <div className="w-1/2 flex border-r-4 border-b-4 border-black">
              <div className="h-96 w-1/3 border-2 border-black">
                  <img src="images/hero1.png" alt="hero1" className="w-full h-full bg-cover" />
              </div>
              <div className="h-96 w-1/3 border-2 border-black">
                  <img src="images/hero2.jpeg" alt="hero2" className="w-full h-full bg-cover" />
              </div>
              <div className="h-96 w-1/3 border-2 border-black">
                  <img src="images/hero3.jpeg" alt="hero3" className="w-full h-full bg-cover" />
              </div>
          </div>
    </div>
  );
};

export default HeroSection;
