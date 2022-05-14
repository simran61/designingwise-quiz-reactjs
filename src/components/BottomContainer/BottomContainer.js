import React from "react";
import ExploreMore from "../ExploreMore/ExploreMore";
import TopScorers from "../TopScorers/TopScorers";
import "./BottomContainer.css";

const BottomContainer = () => {
  return (
    <>
      <div className="two_container">
        <TopScorers />
        <ExploreMore />
      </div>
    </>
  );
};

export default BottomContainer;
