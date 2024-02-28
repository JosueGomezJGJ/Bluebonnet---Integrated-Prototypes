// Import using relational paths
import "../App.css";

function Dashboard({ setScreen, user }) {
  // Write in Javascript here

  return (
    <div className="page">
      <h1 className="text-4xl font-bold mt-0 pt-10 mb-2">
        Welcome {user.name}
      </h1>
      {/* <button onClick={() => setScreen("plant-search")}>Add Plant</button> */}
    </div>
  );
}

export { Dashboard };
// Use {} notation to export more than one component;
