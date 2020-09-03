import React from "react";
import "./App.css";
import user from "../assets/user.json";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import statisticalData from "../assets/statistical-data.json";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
    </>
  );
};

export default App;
