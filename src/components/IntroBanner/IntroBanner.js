import React from "react";
import "./IntroBanner.css";
import quiz_main from "../../assests/quiz_main.png";
import logofinal from "../../assests/logofinal.png";

const IntroBanner = () => {
  return (
    <>
      <div className="banner">
        <img src={quiz_main} alt="" className="rocket_img" />
        <div className="banner_content">
          <h1>Welcome to,</h1>
          <img src={logofinal} alt="logo" className="banner_logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas earum
            provident excepturi animi nesciunt dicta sequi aperiam pariatur qui
            veniam eveniet reiciendis, ex consequatur nobis quaerat similique
            obcaecati ipsum vel!
          </p>
        </div>
      </div>
    </>
  );
};

export default IntroBanner;
