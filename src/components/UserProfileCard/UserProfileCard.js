import React from "react";
import profile from "../../assests/profile.jpeg";
import "./UserProfileCard.css";

const UserProfileCard = () => {
  return (
    <>
      <div class="card_container">
        <div class="show_flex">
          <img src={profile} alt="" class="profile_page_img" />

          <div class="profile_content">
            <h2>Simran Gangwani</h2>
            <p class="grey_text">Developer & Designer</p>

            <div class="progress_div">
              <p class="progress_text grey_text">179/256 played</p>
              <div class="progress progress_1">
                <div class="progress_done progress_done_1" data-done="80"></div>
              </div>
            </div>

            <div class="status_div show_flex">
              <div class="status_info_icon_card show_flex">
                <div class="icon_div">
                  <i class="profile_score_icon_user fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <div class="status_content">
                  <h2>27</h2>
                  <p class="grey_text">Quiz Won</p>
                </div>
              </div>

              <div class="status_info_icon_card show_flex">
                <div class="icon_div">
                  <i class="profile_score_icon_user fa-regular fa-star-half-stroke"></i>
                </div>
                <div class="status_content">
                  <h2>14</h2>
                  <p class="grey_text">Highest Score</p>
                </div>
              </div>

              <div class="status_info_icon_card show_flex">
                <div class="icon_div">
                  <i class="profile_score_icon_user fa-solid fa-check"></i>
                </div>
                <div class="status_content">
                  <h2>158</h2>
                  <p class="grey_text">Correct Answers</p>
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
