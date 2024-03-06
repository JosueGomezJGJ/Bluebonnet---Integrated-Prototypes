import React from "react";
import { useNavigate } from "react-router-dom";

function PlantCard({ plant }) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/plant/${plant.id}`);
  }
  return (
    <div className="mx-auto px-6 my-4" onClick={handleClick}>
      <div className="bg-green rounded-xl shadow-sm overflow-hidden flex items-center px-4">
        <div className="flex justify-center items-center w-32 h-full bg-opacity-30 bg-light-green rounded-xl">
          <img
            className="w-24 h-20 object-cover"
            src={plant.image}
            alt={plant.name}
          />
        </div>
        <div className="flex-grow flex flex-col justify-between p-4 text-white">
          <h2 className="text-white text-sm font-semibold pb-1.5">
            {plant.name}
          </h2>
          <p className="text-xs pb-1.5">{plant.sunlight}</p>
          <p className="text-xs pb-1.5">{plant.watering}</p>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
