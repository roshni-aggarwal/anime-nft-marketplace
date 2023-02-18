import React from "react";
import { Link } from "react-router-dom";

const TrendingCard = ({ item }) => {
  return (
    <Link to={`/collection/${item.name}/${item._id}}`}>
      <div className="border-2 border-black drop-shadow-lg">
        <div className="h-2/3">
          <img src={item.nft} alt="nft" className="w-full h-full" />
        </div>
        <div className="flex items-center flex-col justify-center relative">
          <div className="absolute w-16 rounded-full bg-white p-2 bottom-16">
            <img
              src={item.artist}
              alt="artist"
              className="rounded-full h-full w-full"
            />
          </div>
          <div className="mt-10 flex flex-col items-center justify-center">
            <h3 className="text-lg font-bold capitalize">{item.name} </h3>
            <p>{item.price} </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrendingCard;
