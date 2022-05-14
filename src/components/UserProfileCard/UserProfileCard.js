import React from "react";
import profile from "../../assests/profile.jpeg";
import "./UserProfileCard.css";

const UserProfileCard = () => {
  return (
    <>
      <div className="card_container">
        <div className="show_flex">
          <img src={profile} alt="" className="profile_page_img" />

          <div className="profile_content">
            <h2>Simran Gangwani</h2>
            <p className="grey_text">Developer & Designer</p>

            <div className="progress_div">
              <p className="progress_text grey_text">179/256 played</p>
              <div className="progress progress_1">
                <div
                  className="progress_done progress_done_1"
                  data-done="80"
                ></div>
              </div>
            </div>

            <div className="status_div show_flex">
              <div className="status_info_icon_card show_flex">
                <div className="icon_div">
                  <i className="profile_score_icon_user fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <div className="status_content">
                  <h2>27</h2>
                  <p className="grey_text">Quiz Won</p>
                </div>
              </div>

              <div className="status_info_icon_card show_flex">
                <div className="icon_div">
                  <i className="profile_score_icon_user fa-regular fa-star-half-stroke"></i>
                </div>
                <div className="status_content">
                  <h2>14</h2>
                  <p className="grey_text">Highest Score</p>
                </div>
              </div>

              <div className="status_info_icon_card show_flex">
                <div className="icon_div">
                  <i className="profile_score_icon_user fa-solid fa-check"></i>
                </div>
                <div className="status_content">
                  <h2>158</h2>
                  <p className="grey_text">Correct Answers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileCard;
