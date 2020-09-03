import React from "react";
import "./App.css";
import user from "../assets/user.json";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import statisticalData from "../assets/statistical-data.json";
import FriendList from "./friendList/FriendList";
import friends from "../assets/friends.json";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import items from "../assets/transactions.json";

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
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </>
  );
};

export default App;
