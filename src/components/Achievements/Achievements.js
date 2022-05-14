import React from "react";
import "./Achievements.css";
import medal_blue from "../../assests/medal_blue.png";
import medal_purple from "../../assests/medal_purple.png";
import medal_teal from "../../assests/medal_teal.png";

const Achievements = () => {
  return (
    <>
      <div class="card_container profile_container_half">
        <div class="leaderboard_heading">
          <div class="popular_content">
            <h3 class="profile_page_card_heading">Achievements</h3>
            <span class="achivement_txt_badge">38</span>
          </div>
          <div class="progress_div show_flex align_center">
            <p class="mr_sm grey_text">38/50</p>
            <div class="progress progress_2">
              <div class="progress_done progress_done_2" data-done="80"></div>
            </div>
          </div>
        </div>

        <div class="achievement_content">
          <div class="medals">
            <img src={medal_blue} alt="" class="medal_img" />
            <div class="medal_content">Comeback</div>
          </div>

          <div class="medals">
            <img src={medal_purple} alt="" class="medal_img" />
            <div class="medal_content">Lucky</div>
          </div>

          <div class="medals">
            <img src={medal_teal} alt="" class="medal_img" />
            <div class="medal_content">Leading</div>
          </div>
        </div>

        <div class="achievement_card_footer grey_text">View all</div>
      </div>
    </>
  );
};

export default Achievements;
