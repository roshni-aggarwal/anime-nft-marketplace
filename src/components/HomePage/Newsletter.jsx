import React from "react";

const Newsletter = () => {
  return (
    <div className="flex my-48 items-center">
      <div className="flex flex-col gap-5 p-4">
        <h1 className="font-bold text-xl md:text-3xl lg:text-5xl">
          Never miss a drop!
        </h1>
        <p className="text-gray-700">
          Subcribe to our super-exclusive drop list and be the first to know
          abour upcoming drops
        </p>
        <div className="border p-1 border-black flex justify-between">
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            className="w-full outline-none"
          />
          <button className="bg-blue-400 p-2 w-10 h-full">
            <img src="images/right-arrow.png" alt="submit" />
          </button>
        </div>
      </div>
      <div>
        <img src="images/newsletter.png" alt="newsletter" />
      </div>
    </div>
  );
};

export default Newsletter;
