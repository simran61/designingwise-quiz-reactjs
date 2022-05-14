import React from "react";
import Achievements from "../../components/Achievements/Achievements";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";

const ProfilePage = () => {
  return (
    <>
      <UserProfileCard />
      <div className="two_container">
        <Achievements />
        <Achievements />
      </div>
    </>
  );
};

export default ProfilePage;
