import React, { useState } from "react";
import SunIcon from "../ui/icons/Sun";
import HalfWaterIcon from "../ui/icons/HalfWaterDrop";
import ThermometerIcon from "../ui/icons/Thermometer";
import ForecastItem from "../ui/forecast";
import weatherData from "../lib/weatherData";
import seasonalData from "../lib/seasonalData";
import WindIcon from "../ui/icons/WindIcon";

const iconMapping = {
  watering: HalfWaterIcon,
  wind: WindIcon,
  temperature: ThermometerIcon,
  sunlight: SunIcon,
};

function SeasonInsights() {
  const [selectedSeason, setSelectedSeason] = useState("spring");
  const insights = seasonalData[selectedSeason];

  const handleSeasonChange = (season) => {
    setSelectedSeason(season.toLowerCase());
  };

  const InsightIcon = ({ type }) => {
    const IconComponent = iconMapping[type];
    return <IconComponent color="#466F55" dimensions="4em" />;
  };

  return (
    <div
      className="page overflow-y-auto"
      style={{ height: "calc(100vh - 9rem)" }}
    >
      <div className="flex flex-wrap items-center  pt-4 pl-7">
        <SunIcon color="black" dimensions="2.5rem" />
        <h1 className="text-5xl font-semibold pl-4">68°</h1>
        <h2 className="text-2xl font-semibold pt-4 pl-7">Arlington, TX</h2>
      </div>
      <div className="mt-4 mx-6 bg-light-green rounded-lg font-bold text-sm pt-2.5 px-4 max-h-48 overflow-y-auto">
        <h1 className="border-b pb-1 text-xs">10-DAY FORECAST</h1>
        {weatherData.map((data, index) => (
          <ForecastItem
            key={index}
            day={data.day}
            high={data.high}
            low={data.low}
            icon={<SunIcon color="#000000" dimensions={"1rem"} />}
          />
        ))}
      </div>
      <div className="mt-4 mx-6 bg-light-green rounded-lg font-bold text-sm py-3 px-4">
        <h1 className="text-xl font-bold text-center pb-4">
          Seasonal Insights
        </h1>

        <div className="flex justify-center gap-1 mb-4 bg-green  rounded-xl text-white">
          {["Winter", "Spring", "Summer", "Fall"].map((season) => (
            <button
              key={season}
              className={`px-3.5 py-2 ${
                selectedSeason.toLowerCase() === season.toLowerCase()
                  ? "bg-light-green text-black rounded-full my-1 py-px"
                  : "bg-transparent"
              }`}
              onClick={() => handleSeasonChange(season)}
            >
              {season}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {Object.entries(insights).map(([key, value]) => (
            <div
              key={key}
              className="bg-green rounded-xl flex items-center p-1"
            >
              <div className="flex justify-center items-center mx-2 w-32 h-20 bg-light-green rounded-l-xl">
                <InsightIcon type={key} />
              </div>

              <div className="flex-1 text-white text-sm font-semibold p-4">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { SeasonInsights };
