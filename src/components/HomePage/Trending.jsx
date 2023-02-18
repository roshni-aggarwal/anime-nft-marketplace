import React from "react";

// components
import TrendingCard from "./TrendingCard";

const Trending = ({ trending }) => {

  return (
    <div className="my-16 py-4">
      <h1 className="text-3xl font-semibold">TRENDING NFT</h1>
      <div className="p-4 flex gap-8 items-center justify-between">
        {trending.map((item, index) => (
          <TrendingCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
