import React from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";

const NFT = () => {
  const { id } = useParams();

  const data = {
    name: "NFT#2",
    description: "Alchemy's Second NFT",
    website: "http://axieinfinity.io",
    image: "/images/nft.avif",
    price: "0.03ETH",
    currentlySelling: "True",
    studio: "maapa",
    address: "0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center gap-5 w-4/5 my-10 h-4/5">
        <div className="w-1/2">
          <img src={data.image} alt="nft" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl border-2 border-black p-2 capitalize">
            {data.name}
          </h1>
          <h1 className="text-xl border-2 border-black p-2 capitalize">
            Created by {data.studio}
          </h1>
          <div className="flex flex-col gap-5 p-2 border-2 border-black">
            <h1 className="text-xl ">Current Price : {data.price}</h1>
            <button className="p-4 border-2 border-black hover:bg-sky-200">BUY NOW!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFT;
