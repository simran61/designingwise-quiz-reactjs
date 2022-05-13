import React from "react";
import "./ExploreMore.css";
import notepad from "../../assests/notepad.svg";
import { Link } from "react-router-dom";

const ExploreMore = () => {
  return (
    <>
      <div className="categories general_info">
        <div className="padding_sm padding_rl gradient">
          <h1>Quizes on designing, painting, colors all at one place</h1>
          <p>
            Play quizes on DesignerWise & flaunt your knowledge in front of your
            friends.
          </p>
          <Link to="/rules">
            <button className="btn btn_primary">Play Now</button>
          </Link>
          <img src={notepad} alt="" className="side_icon" />
        </div>
      </div>
    </>
  );
};

export default ExploreMore;
