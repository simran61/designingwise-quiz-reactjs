import React from "react";
import profile4 from "../../assests/profile4.jpg";

const LowRank = () => {
  return (
    <>
      <div className="low_rank">
        <div className="low_rank_user_info show_flex">
          <h1 className="user_rank">#4</h1>
          <img src={profile4} alt="" className="low_rank_img" />
          <div className="user_name">
            <h3>Harry Barnet</h3>
            <p className="sm_text">Designer & developer</p>
          </div>
        </div>
        <button className="btn btn_low_rank">98 Answer</button>
        <div className="show_flex">
          <div className="status_info show_flex">
            <i className="profile_score_icon fa-solid fa-wand-magic-sparkles"></i>
            <h3>46</h3>
          </div>
          <div className="status_info show_flex">
            <i className="profile_score_icon fa-regular fa-star-half-stroke"></i>
            <h3>37</h3>
          </div>
          <div className="status_info show_flex">
            <i className="profile_score_icon fa-solid fa-check"></i>
            <h3>98</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default LowRank;
