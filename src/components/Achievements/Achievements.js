import React from "react";
import "./Achievements.css";
import medal_blue from "../../assests/medal_blue.png";
import medal_purple from "../../assests/medal_purple.png";
import medal_teal from "../../assests/medal_teal.png";

const Achievements = () => {
  return (
    <>
      <div className="card_container profile_container_half">
        <div className="leaderboard_heading">
          <div className="popular_content">
            <h3 className="profile_page_card_heading">Achievements</h3>
            <span className="achivement_txt_badge">38</span>
          </div>
          <div className="progress_div show_flex align_center">
            <p className="mr_sm grey_text">38/50</p>
            <div className="progress progress_2">
              <div
                className="progress_done progress_done_2"
                data-done="80"
              ></div>
            </div>
          </div>
        </div>

        <div className="achievement_content">
          <div className="medals">
            <img src={medal_blue} alt="" className="medal_img" />
            <div className="medal_content">Comeback</div>
          </div>

          <div className="medals">
            <img src={medal_purple} alt="" className="medal_img" />
            <div className="medal_content">Lucky</div>
          </div>

          <div className="medals">
            <img src={medal_teal} alt="" className="medal_img" />
            <div className="medal_content">Leading</div>
          </div>
        </div>

        <div className="achievement_card_footer grey_text">View all</div>
      </div>
    </>
  );
};

export default Achievements;
