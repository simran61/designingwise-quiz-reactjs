import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import TopNavBar from "./components/TopNavBar/TopNavBar";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Home from "./Pages/Home/Home";
import Rules from "./Pages/Rules/Rules";
import Results from "./Pages/Results/Results";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import LogIn from "./Pages/Auth/LogIn";
import LogOut from "./Pages/Auth/LogOut";
import SignUp from "./Pages/Auth/SignUp";
import PlayQuiz from "./Pages/PlayQuiz/PlayQuiz";

const App = () => {
  return (
    <div className="App">
      <TopNavBar />
      <section className="header">
        <SideNavBar />

        <div className="main_content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/results" element={<Results />} />
            <Route path="/profilepage" element={<ProfilePage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/signup" element={<SignUp />} />
            <Route exact path="/play" element={<PlayQuiz />} />
          </Routes>
        </div>
      </section>
    </div>
  );
};

export default App;
