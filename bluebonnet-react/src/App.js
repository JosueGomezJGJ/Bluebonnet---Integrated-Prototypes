import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { SeasonInsights } from "./pages/SeasonInsights";
import { Dashboard } from "./pages/Dashboard";
import { getCurrentSeason } from "./lib/utils";

// Data
// import { cilantroPlantData, cilantroForum } from "./AppConfig";

function App() {
  const [index, setIndex] = useState(1);

  const styles = {
    slideContainer: {
      height: "100vh",
      WebkitOverflowScrolling: "touch",
    },
  };

  const screenIndices = {
    "season-insights": 0,
    dashboard: 1,
  };

  const user = {
    name: "Alex",
  };

  const setScreen = (screenName) => {
    const newIndex = screenIndices[screenName];
    if (newIndex !== undefined) {
      setIndex(newIndex);
    } else {
      console.warn("Unknown screen name:", screenName);
    }
  };

  const currentSeason = getCurrentSeason();
  return (
    <SwipeableViews
      className={`bg-${currentSeason}`}
      containerStyle={styles.slideContainer}
      enableMouseEvents
      index={index}
      onChangeIndex={(newIndex) => {}}
    >
      <SeasonInsights setScreen={setScreen} />
      <Dashboard setScreen={setScreen} user={user} />
    </SwipeableViews>
  );
}

export default App;
