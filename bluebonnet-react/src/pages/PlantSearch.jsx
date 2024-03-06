import React, { useState } from "react";
import searchableData from "../lib/searchableData";
import MagnifyingGlassIcon from "../ui/icons/MagnifyingGlassIcon";
import BottomNav from "../ui/navbar";
import { useNavigate } from "react-router-dom";

function PlantSearch({ setScreen }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = searchableData.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let navigate = useNavigate();

  return (
    <div className="page">
      <div className="flex items-center justify-center py-4 relative">
        <h1 className="text-2xl font-bold">Plant Search</h1>
      </div>
      <div className="flex justify-center items-center px-8 py-3">
        <div className="flex flex-1 items-center px-4 py-2 bg-light-green border border-green rounded-full">
          <MagnifyingGlassIcon color="#466F55" dimensions={"15px"} />
          <input
            className="bg-light-green text-green w-full placeholder-opacity-35 pl-2.5 text-sm"
            placeholder="Search for plants"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {searchTerm.trim() ? (
        <div className="grid grid-cols-1 gap-4 px-6">
          {filteredData.map((plant) => (
            <div
              className="bg-green rounded-xl flex items-center px-4"
              onClick={() => navigate(`/add-plant/${plant.id}`)}
            >
              <div className="flex justify-center items-center w-32 my-4 bg-opacity-30 bg-light-green rounded-xl">
                <img
                  className="w-20 h-20 object-cover"
                  src={plant.image}
                  alt={plant.name}
                />
              </div>
              <div className="flex-grow flex flex-col justify-between p-4 text-white">
                <h2 className="text-white text-m text-center font-bold pb-1.5">
                  {plant.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="flex justify-around my-12">
            <div className="bg-light-green border border-green rounded-xl p-4 w-32 h-20">
              Indoor
            </div>
            <div className="bg-light-green border border-green rounded-xl p-4 w-32 h-20">
              Outdoor
            </div>
          </div>
          <div className="flex justify-around my-12">
            <div className="bg-light-green border border-green rounded-xl p-4 w-32 h-20">
              Flowering
            </div>
            <div className="bg-light-green border border-green rounded-xl p-4 w-32 h-20">
              Non-flowering
            </div>
          </div>
        </>
      )}
      <BottomNav setScreen={setScreen} />
    </div>
  );
}

export { PlantSearch };
