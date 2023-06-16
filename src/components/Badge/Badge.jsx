import React from "react";
import styles from "./badge.module.css";

const Badge = ({children }) => {
  return (
      <button className={styles.container}>{children}</button>
  );
};

export default Badge;