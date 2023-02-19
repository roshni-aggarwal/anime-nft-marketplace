import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
const Navbar = () => {
  const user = {
    name: "Roshni",
    image: "/images/user.png",
  };
  const [connected, toggleConnect] = useState(false);
   const location = useLocation();
   const [currAddress, updateAddress] = useState("0x");

   async function getAddress() {
    const ethers = require("ethers");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    updateAddress(addr);
  }
  
  function updateButton() {
    const ethereumButton = document.querySelector('.enableEthereumButton');
    ethereumButton.textContent = "Connected";
  }
   async function connectWebsite() {

    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    if(chainId !== '0x5')
    {
      //alert('Incorrect network! Switch your metamask network to Rinkeby');
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x5' }],
     })
    }  
    await window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(() => {
        updateButton();
        console.log("here");
        getAddress();
        window.location.replace(location.pathname)
      });
}
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
      <button
          className="enableEthereumButton px-4 py-2 border-2 border-r-4 border-b-4 border-black bg-blue-400 font-medium shadow-lg"
          onClick={connectWebsite}
        >
          {connected ? "Connected" : "Connect Wallet"}
        </button>
        <Link to={"/profile"} className="flex items-center">
          <div className="w-10 rounded-full">
          {/* {currAddress !== "0x" ? "Connected to":alert("Not Connected. Please login to view NFTs")} {currAddress !== "0x" ? (currAddress.substring(0,15)+'...'):""} */}
            <img src={user.image} alt="avatar" className="w-full h-full" />
          </div>
          <h3>{user.name}</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
