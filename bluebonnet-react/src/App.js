import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { SeasonInsights } from "./pages/SeasonInsights";
import { Dashboard } from "./pages/Dashboard";
import { PlantProfile } from "./pages/PlantProfile";
import { PlantSearch } from "./pages/PlantSearch";
import BottomNavBar from "./ui/navbar";
import initialPlantsData from "./lib/data";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [index, setIndex] = useState(0);
  const [plantsData, setPlantsData] = useState(initialPlantsData);

  useEffect(() => {
    const pathToIndex = { "/": 1, "/season-insights": 0 };
    const newIndex = pathToIndex[location.pathname];
    if (typeof newIndex === "number") {
      setIndex(newIndex);
    }
  }, [location]);

  const handleChangeIndex = (index) => {
    const indexToPath = { 0: "/season-insights", 1: "/" };
    navigate(indexToPath[index] || "/");
  };

  const isSwipeableView = ["/", "/season-insights"].includes(location.pathname);

  return (
    <>
      {isSwipeableView ? (
        <>
          <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
            <SeasonInsights />
            <Dashboard user={{ name: "Alex" }} />
          </SwipeableViews>
          <BottomNavBar />
        </>
      ) : (
        <Routes>
          <Route
            path="/plant/:id"
            element={
              <PlantProfile
                plantsData={plantsData}
                setPlantsData={setPlantsData}
              />
            }
          />
          <Route path="/add-plant" element={<PlantSearch />} />
        </Routes>
      )}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  );
}
