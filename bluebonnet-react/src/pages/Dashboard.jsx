import "../App.css";
import PlantCard from "../ui/PlantCard";

function Dashboard({ plantsData }) {
  console.log(plantsData);
  return (
    <div className="page flex flex-col">
      <h1 className="text-2xl font-semibold pl-8">My Plants</h1>
      <div
        className="overflow-y-auto"
        style={{ height: "calc(100vh - 10rem)" }}
      >
        {plantsData.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}

export { Dashboard };
