import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 md:p-24 lg:px-48 container mx-auto ">
      <div className="flex justify-between items-center">
        <div className="w-60">
          <img src="\images\title.png" alt="logo" className="w-full h-full" />
        </div>
        <div className="flex md:w-1/2 gap-24 md:gap-1">
          <div className="flex flex-col items-start gap-4 md:w-1/3">
            <h3 className="text-xs font-bold text-blue-400">MARKETPLACE</h3>
            <span className="text-sm font-medium">About Us</span>
            <span className="text-sm font-medium">All NFTs</span>
            <span className="text-sm font-medium">Studios</span>
            <span className="text-sm font-medium">Cart page</span>
          </div>
          <div className="flex flex-col items-start gap-4 md:w-1/3">
            <h3 className="text-xs font-bold text-blue-400">My Account</h3>
            <h3 className="text-sm font-medium">Profile</h3>
            <h3 className="text-sm font-medium">Favourites</h3>
            <h3 className="text-sm font-medium">My Collections</h3>
            <h3 className="text-sm font-medium">My Cart</h3>
          </div>
        </div>
      </div>
      <p className="border-t border-gray-100 py-8 text-sm">
        All rights to <span className="font-bold">©2023 Manga Mint</span>
      </p>
    </footer>
  );
};

export default Footer;
