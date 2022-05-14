import React from "react";
import "./LeaderBoard.css";
import profile from "../../assests/profile.jpeg";
import profile2 from "../../assests/profile2.jpg";
import profile3 from "../../assests/profile3.jpg";
import trophy from "../../assests/trophy1.png";
import LowRank from "../../components/LowRank/LowRank";

const LeaderBoard = () => {
  return (
    <>
      <h2>DesignerWise Masterpieces</h2>
      <div className="leaderBoard_container">
        <div className="toppers">
          <div className="rank_card rank1 show_center">
            <img src={trophy} alt="" className="topper_icon" />
            <img src={profile} alt="" className="rank_profile_img" />
            <h2>Simran Gangwani</h2>
            <p className="sm_text">Designer & developer</p>
            <button className="btn btn_rank">128 Answer</button>
            <div className="show_status show_flex">
              <div className="status_info show_flex score_first">
                <i className="profile_score_icon fa-solid fa-wand-magic-sparkles"></i>
                <h3>62</h3>
              </div>

              <div className="status_info show_flex score_first">
                <i className="profile_score_icon fa-regular fa-star-half-stroke"></i>
                <h3>47</h3>
              </div>

              <div className="status_info show_flex score_first">
                <i className="profile_score_icon fa-solid fa-check"></i>
                <h3>128</h3>
              </div>
            </div>
          </div>

          <div className="rank_card rank2 show_center">
            <img src={trophy} alt="" className="topper_icon" />
            <img src={profile2} alt="" className="rank_profile_img" />
            <h2>Arnav Paul</h2>
            <p className="sm_text">Designer & developer</p>
            <button className="btn btn_rank">121 Answer</button>
            <div className="show_status show_flex">
              <div className="status_info show_flex score_second">
                <i className="profile_score_icon fa-solid fa-wand-magic-sparkles"></i>
                <h3>59</h3>
              </div>

              <div className="status_info show_flex score_second">
                <i className="profile_score_icon fa-regular fa-star-half-stroke"></i>
                <h3>45</h3>
              </div>

              <div className="status_info show_flex score_second">
                <i className="profile_score_icon fa-solid fa-check"></i>
                <h3>121</h3>
              </div>
            </div>
          </div>

          <div className="rank_card rank3 show_center">
            <img src={trophy} alt="" className="topper_icon" />
            <img src={profile3} alt="" className="rank_profile_img" />
            <h2>Yashi Brewer</h2>
            <p className="sm_text">Designer & developer</p>
            <button className="btn btn_rank">108 Answer</button>
            <div className="show_status show_flex">
              <div className="status_info show_flex score_third">
                <i className="profile_score_icon fa-solid fa-wand-magic-sparkles"></i>
                <h3>52</h3>
              </div>

              <div className="status_info show_flex score_third">
                <i className="profile_score_icon fa-regular fa-star-half-stroke"></i>
                <h3>39</h3>
              </div>

              <div className="status_info show_flex score_third">
                <i className="profile_score_icon fa-solid fa-check"></i>
                <h3>108</h3>
              </div>
            </div>
          </div>
        </div>

        <LowRank />
        <LowRank />
        <LowRank />
        <LowRank />
        <LowRank />
        <LowRank />
        <LowRank />
      </div>
    </>
  );
};

export default LeaderBoard;
