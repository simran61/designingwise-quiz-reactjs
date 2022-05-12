import React from "react";
import LeaderBoard from "../../Pages/LeaderBoard/LeaderBoard";
import ExploreMore from "../ExploreMore/ExploreMore";
import "./BottomContainer.css";

const BottomContainer = () => {
  return (
    <>
      <div className="two_container">
        <LeaderBoard />
        <ExploreMore />
      </div>
    </>
  );
};

export default BottomContainer;
