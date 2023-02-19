import React from "react";
import { Link } from "react-router-dom";

const NFTCards = ({ data }) => {
  console.log(data);
  return (
    <Link to={`/collection/${data.studio}/${data.address}`}>
      <div className="border border-gray-200 flex flex-col h-full cursor-pointer ease-in duration-300">
        <div className="flex flex-col px-2 justify-center h-1/6 bg-sky-300">
          <span className="text-lg font-bold">{data.name} </span>
          <span className="text-gray-700 text-sm font-light capitalize">{`@${data.studio}`}</span>
        </div>
        <div className="h-2/3">
          <img src={data.image} alt="nft" className="w-full h-full bg-cover" />
        </div>
        <div className="flex justify-around items-center my-4 h-1/6">
          <div className="p-2 border-2 border-black hover:bg-sky-200 text-lg font-medium">
            BUY NOW
          </div>
          <span className="text-lg font-bold">{data.price} </span>
        </div>
      </div>
    </Link>
  );
};

export default NFTCards;
