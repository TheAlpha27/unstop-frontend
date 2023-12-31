import React from "react";
import styles from "./Sidebar.module.css";

const Item = ({ icon, name, onClick, active }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.item} ${active ? styles.activeItem : ""}`}
    >
      <img src={icon} alt="" className={styles.icon} />
      {name}
    </div>
  );
};

export default Item;
