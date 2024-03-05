import React from "react";
import { NavLink } from "react-router-dom";
import plusCircleIcon from "./icons/PlusCircleIcon";
import leafIcon from "./icons/LeafIcon";
import cloudIcon from "./icons/CloudIcon";

const BottomNavItem = ({ IconComponent, text, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex flex-col items-center justify-center h-24 text-xs font-semibold leading-[14.79px]`
    }
  >
    {({ isActive }) => (
      <>
        <IconComponent color={isActive ? "#205232" : "#7F7F85"} />
        <span
          className={`mt-2 ${isActive ? "text-accent-green" : "text-zinc-500"}`}
        >
          {text}
        </span>
      </>
    )}
  </NavLink>
);

const BottomNav = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-white flex justify-around">
      <BottomNavItem
        IconComponent={cloudIcon}
        text="Weather"
        to="/season-insights"
      />
      <BottomNavItem
        IconComponent={plusCircleIcon}
        text="Add Plant"
        to="/add-plant"
      />
      <BottomNavItem IconComponent={leafIcon} text="My Plants" to="/" />
    </div>
  );
};

export default BottomNav;
