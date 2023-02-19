import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const user = {
    name: "Roshni",
    image: "/images/user.png",
  };

  const marketPathName = useLocation().pathname.includes("/market");

  return (
    <nav className="flex items-center justify-between px-4 md:px-24 lg:px-24 py-4 shadow sticky top-0 z-50 bg-white">
      <div className="flex items-center gap-2">
        <div className="w-40">
          <img src="/images/title.png" alt="logo" className="w-full h-full" />
        </div>
        <div className="flex items-center gap-6">
          <Link
            to={"/"}
            className={
              marketPathName
                ? `font-medium text-lg text-gray-700 hover:font-bold hover:text-black`
                : `font-medium text-lg text-black`
            }
          >
            HOME
          </Link>
          <Link
            to={"/market"}
            className={
              marketPathName
                ? `font-medium text-lg text-black`
                : `font-medium text-lg text-gray-700 hover:font-bold hover:text-black`
            }
          >
            MARKETPLACE
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button className="px-4 py-2 border-2 border-r-4 border-b-4 border-black bg-blue-400 font-medium shadow-lg">
          Connect Wallet
        </button>
        <Link to={"/profile"} className="flex items-center">
          <div className="w-10 rounded-full">
            <img src={user.image} alt="avatar" className="w-full h-full" />
          </div>
          <h3>{user.name}</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
