import React from "react";
import IntroBanner from "../../components/IntroBanner/IntroBanner";
import PopularQuizes from "../../components/PopularQuizes/PopularQuizes";
import Categories from "../../components/Categories/Categories";
// import TopScorers from "../../components/TopScorers/TopScorers";
// import ExploreMore from "../../components/ExploreMore/ExploreMore";
import BottomContainer from "../../components/BottomContainer/BottomContainer";

const Home = () => {
  return (
    <div>
      <IntroBanner />
      <PopularQuizes />
      <Categories />
      <BottomContainer />
      {/* <TopScorers />
      <ExploreMore /> */}
    </div>
  );
};

export default Home;
