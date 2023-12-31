import React, { useMemo, useState } from "react";
import styles from "./Assessment.module.css";
import SwatchBar from "../SwatchBar/SwatchBar";

const Assessment = () => {
  const [activeSwatch, setActiveSwatch] = useState(1); //1: My Assessments, 2: Dummy Section
  const swatches = useMemo(
    () => [
      {
        name: "My Assessments",
        onClick: () => setActiveSwatch(1),
        active: activeSwatch === 1,
      },
      {
        name: "Dummy Swatch",
        onClick: () => setActiveSwatch(2),
        active: activeSwatch === 2,
      },
    ],
    [activeSwatch, setActiveSwatch]
  );
  return (
    <>
      <div className={styles.top}>
        <span className={styles.title}>Assessment</span>
        <div className={styles.horizontalDivider}></div>
        <SwatchBar
          swatches={swatches}
          activeSwatch={activeSwatch}
          setActiveSwatch={setActiveSwatch}
        />
      </div>
      <div className={styles.bottom}></div>
    </>
  );
};

export default Assessment;
