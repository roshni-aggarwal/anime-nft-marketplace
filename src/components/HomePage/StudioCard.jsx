import React from "react";
import { Link } from "react-router-dom";

const StudioCard = ({ studio }) => {
  return (
    <Link to={`collection/${studio.name}`} className="w-1/3">
      <div className="border-2 border-r-4 border-b-4 border-black">
        <h3 className="bg-lime-200 p-2 px-4 capitalize text-xl font-semibold">
          {studio.name}{" "}
        </h3>
        <div className="border-t-2 border-black">
          <img
            src={studio.image}
            alt="studio"
            className="w-full h-full bg-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default StudioCard;
