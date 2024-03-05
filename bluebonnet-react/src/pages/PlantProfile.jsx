import { useParams } from "react-router-dom";
import { useState } from "react";
import GoBackIcon from "../ui/icons/Left";
import ThermometerIcon from "../ui/icons/Thermometer";
import HalfWaterIcon from "../ui/icons/HalfWaterDrop";
import SunIcon from "../ui/icons/Sun";
import { useNavigate } from "react-router-dom";

function PlantProfile({ plantsData, setPlantsData }) {
  let navigate = useNavigate(); // Hook for navigation
  let { id } = useParams();
  let plantIndex = plantsData.findIndex((p) => p.id === parseInt(id));
  let plant = plantsData[plantIndex];

  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment) return;

    const comment = {
      user: "Alex",
      comment: newComment,
    };

    const updatedPlantsData = [...plantsData];
    updatedPlantsData[plantIndex] = {
      ...plant,
      comments: [...plant.comments, comment],
    };

    setPlantsData(updatedPlantsData);
    setNewComment("");
  };

  const goBack = () => {
    navigate("/");
  };

  if (!plant) {
    return <div className="text-center">Plant not found</div>;
  }

  return (
    <div className="overflow-y-auto" style={{ height: "calc(100vh - 1rem)" }}>
      <div className="flex items-center justify-center py-4 relative">
        <button className="absolute left-14" onClick={goBack}>
          <GoBackIcon color="#000" />
        </button>
        <h1 className="text-2xl font-bold">{plant.name}</h1>
      </div>
      <div className="bg-light-green mx-auto rounded-xl flex items-center w-80 h-52">
        <img
          className="mx-auto w-40 h-40 rounded-xl object-cover"
          src={`/${plant.image}`}
          alt={plant.name}
        />
      </div>
      {/* Plant Information Section */}
      <div className="bg-light-green mx-auto rounded-lg p-4 w-80 pb-4 mt-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ThermometerIcon color="red" />
              <div className="text-black font-semibold">Temperature</div>
            </div>
            <div className="text-black font-semibold">{plant.temperature}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <HalfWaterIcon color="#3b82f6" />
              <div className="text-black font-semibold">Watering</div>
            </div>
            <div className="text-black font-semibold">{plant.watering}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <SunIcon color="#fbbf24" />
              <div className="text-black font-semibold">Light</div>
            </div>
            <div className="text-black font-semibold">{plant.sunlight}</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-black font-semibold">About the plant:</div>
            <div className="text-black text-sm">{plant.about}</div>
          </div>
        </div>
      </div>
      {/* What people are saying: section */}
      <div className="bg-light-green mx-auto rounded-lg p-4 w-80 mt-4">
        <div className="text-black font-semibold mb-4">
          What people are saying:
        </div>

        {plant.comments.map((comment, index) => (
          <div
            key={index}
            className="bg-green text-white rounded-xl p-2 mb-4 flex items-center gap-4"
          >
            {/* Placeholder for user avatar */}
            <div className="w-10 h-10 rounded-full bg-gray-400"></div>
            {/* Comment content */}
            <div className="flex flex-col">
              <span className="font-semibold">{comment.user}</span>
              <span className="text-xs">{comment.comment}</span>
            </div>
          </div>
        ))}

        <form
          onSubmit={handleCommentSubmit}
          className="flex items-center gap-3"
        >
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-grow p-2 rounded-md border-2 border-gray-300"
          />
          <button type="submit" className="bg-green text-white rounded-lg p-2">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export { PlantProfile };
