import React from "react";
import styles from "./SwatchBar.module.css";

const SwatchBar = ({ activeSwatch, setActiveSwatch, swatches }) => {
  return (
    <div className={styles.container}>
      {swatches.map((e) => {
        return (
          <div
            className={`${styles.items} ${e.active ? styles.activeItem : ""}`}
            onClick={e.onClick}
          >
            {e.name}
          </div>
        );
      })}
    </div>
  );
};

export default SwatchBar;
