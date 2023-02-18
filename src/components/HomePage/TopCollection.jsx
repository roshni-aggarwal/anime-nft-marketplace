import React from "react";
import StudioCard from "./StudioCard";

const TopCollection = ({ topStudio }) => {
  return (
    <div className="flex flex-col items-center justify-center my-16 gap-8">
      <h1 className="text-3xl font-semibold">TOP STUDIO</h1>
      <div className="flex justify-between gap-5 my-4">
        {topStudio.map((studio, index) => (
          <StudioCard studio={studio} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TopCollection;
