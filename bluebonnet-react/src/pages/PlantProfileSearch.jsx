import { useParams } from "react-router-dom";
import GoBackIcon from "../ui/icons/Left";
import ThermometerIcon from "../ui/icons/Thermometer";
import HalfWaterIcon from "../ui/icons/HalfWaterDrop";
import SunIcon from "../ui/icons/Sun";
import { useNavigate } from "react-router-dom";
import BottomNav from "../ui/navbar";
import PlantsData from "../lib/data";

function PlantProfileSearch({ searchableData, setPlantsData }) {
  let navigate = useNavigate();
  let { id } = useParams();
  const plantToAdd = searchableData.find((p) => p.id === parseInt(id));

  const goBack = () => {
    navigate("/add-plant");
  };

  const handleAddPlant = () => {
    const plantToAdd = searchableData.find((p) => p.id === parseInt(id));
    console.log(plantToAdd);

    const updatedPlantsData = [...PlantsData, plantToAdd];
    setPlantsData(updatedPlantsData);
    navigate("/");
  };

  if (!plantToAdd) {
    return <div className="text-center">Plant not found</div>;
  }

  return (
    <div className="overflow-y-auto" style={{ height: "calc(100vh - 1rem)" }}>
      <div className="flex items-center justify-center py-4 relative">
        <button className="absolute left-14" onClick={goBack}>
          <GoBackIcon color="#000" />
        </button>
        <h1 className="text-2xl font-bold">{plantToAdd.name}</h1>
      </div>
      <div className="bg-light-green mx-auto rounded-xl flex items-center w-80 h-52">
        <img
          className="mx-auto w-40 h-40 rounded-xl object-cover"
          src={`/${plantToAdd.image}`}
          alt={plantToAdd.name}
        />
      </div>
      {/* Plant Information Section */}
      <div className="bg-light-green mx-auto rounded-lg p-4 w-80 pb-4 mt-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ThermometerIcon color="red" dimensions={"16px"} />
              <div className="text-black font-semibold">Temperature</div>
            </div>
            <div className="text-black font-semibold">
              {plantToAdd.temperature}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <HalfWaterIcon color="#3b82f6" dimensions={"16px"} />
              <div className="text-black font-semibold">Watering</div>
            </div>
            <div className="text-black font-semibold">
              {plantToAdd.watering}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <SunIcon color="#fbbf24" dimensions={"16px"} />
              <div className="text-black font-semibold">Light</div>
            </div>
            <div className="text-black font-semibold">
              {plantToAdd.sunlight}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-black font-semibold">About the plant:</div>
            <div className="text-black text-sm">{plantToAdd.about}</div>
          </div>
        </div>
      </div>
      {/* What people are saying: section */}
      <div className="bg-light-green mx-auto rounded-lg p-4 w-80 mt-4">
        <div className="text-black font-semibold mb-4">
          What people are saying:
        </div>

        {plantToAdd.comments.map((comment, index) => (
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
      </div>
      <div className="fixed bottom-20 inset-x-0 px-4 py-8 mx-7">
        <div className="flex justify-between items-center">
          <button
            onClick={handleAddPlant}
            className="bg-green text-white py-2 px-4 rounded-lg flex-grow mr-2"
          >
            Add to My Plants
          </button>
          <span className="bg-light-green py-2 px-4 rounded-lg flex-grow ml-2">
            x0 in Garden
          </span>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export { PlantProfileSearch };
