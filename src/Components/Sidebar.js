import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null; //Early return pattern
  return (
    <div className="w-48 p-5 shadow-lg">
      <ul className="pb-4">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h1 className="font-bold">Subscription</h1>
      <ul className="pb-4">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold">Watch Later</h1>
      <ul className="pb-4">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
