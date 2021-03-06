import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const StatisticsItem = ({ id, label, percentage }) => {
  function generateColor() {
    return (
      "#" +
      (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
    );
  }
  const backgroundColor = {
    backgroundColor: generateColor(),
  };
  return (
    <li className={styles.item} id={id} style={backgroundColor}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {!undefined && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles["stat-list"]}>
        {stats.map((item) => (
          <StatisticsItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

Statistics.defaultProps = { title: "Upload stats" };
