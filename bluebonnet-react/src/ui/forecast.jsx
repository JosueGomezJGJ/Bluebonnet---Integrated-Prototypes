const ForecastItem = ({ day, high, low, icon }) => {
  return (
    <div className="flex items-center justify-between border-b border-green-800 py-2">
      <div className="flex items-center gap-14 w-1/4">
        <div className="text-black font-semibold">{day}</div>
      </div>
      <div className="flex-none">{icon}</div>
      <div className="flex items-center gap-10">
        <div className="text-black font-semibold">High:{high}</div>
        <div className="text-black font-semibold">Low:{low}</div>
      </div>
    </div>
  );
};

export default ForecastItem;
