import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.activ : styles.disactive}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="98"></img>
      <p className={styles.name}>{name} </p>
    </li>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className={styles["friend-list"]}>
      {friends.map((item) => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </ul>
  );
};
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      name: PropTypes.string,
    })
  ).isRequired,
};
