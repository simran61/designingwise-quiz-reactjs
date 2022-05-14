import React from "react";
import "./TopScorers.css";
import quiz_main from "../../assests/quiz_main.png";
import profile from "../../assests/profile.jpeg";
import profile2 from "../../assests/profile2.jpg";
import profile3 from "../../assests/profile3.jpg";
import profile4 from "../../assests/profile4.jpg";

const TopScorers = () => {
  return (
    <>
      <div class="categories leaderboard">
        <div class="card_container padding_md">
          <div class="leaderboard_heading">
            <div class="popular_content">
              <h3>DesignerWise Masterpieces</h3>
              <p>Play more and more quizes to build your rank</p>
            </div>
            <a href="./leaderBoard/leaderBoard.html" class="see_more">
              See All
            </a>
          </div>
          <div class="flex_wrapper">
            <div class="lb_img">
              <img src={quiz_main} alt="" class="lboard_main_img" />
            </div>
            <div class="lb_stats">
              <div class="person">
                <img src={profile} alt="" class="person_img" />
                <p class="name">simran65</p>
                <p class="rank">#16</p>
                <p class="play">played 78 quizes</p>
              </div>

              <div class="person">
                <img src={profile2} alt="" class="person_img" />
                <p class="name">einstein78</p>
                <p class="rank">#28</p>
                <p class="play">played 64 quizes</p>
              </div>

              <div class="person">
                <img src={profile3} alt="" class="person_img" />
                <p class="name">yashi12</p>
                <p class="rank">#48</p>
                <p class="play">played 57 quizes</p>
              </div>

              <div class="person">
                <img src={profile4} alt="" class="person_img" />
                <p class="name">sam.126</p>
                <p class="rank">#56</p>
                <p class="play">played 53 quizes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopScorers;
