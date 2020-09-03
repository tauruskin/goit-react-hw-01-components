import React from "react";
import user from "../assets/user.json";
import Profile from "./profile/Profile";

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
      {/* <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friend={friends} />
      <TransactionHistory items={items} /> */}
    </>
  );
};

export default App;
