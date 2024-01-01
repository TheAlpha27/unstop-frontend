import React, { useMemo, useState } from "react";
import styles from "./Assessment.module.css";
import SwatchBar from "../SwatchBar/SwatchBar";
import MyAssessments from "./MyAssessments/MyAssessments";
import UnstopAssessments from "./UnstopAssessments/UnstopAssessments";
import hamburger from "../../assets/hamburger.svg";

const Assessment = ({ isMobile, setShowSidebar }) => {
  const [activeSwatch, setActiveSwatch] = useState(1); //1: My Assessments, 2: Unstop Assessments
  const swatches = useMemo(
    () => [
      {
        name: "My Assessments",
        onClick: () => setActiveSwatch(1),
        active: activeSwatch === 1,
      },
      {
        name: "Unstop Assessments",
        onClick: () => setActiveSwatch(2),
        active: activeSwatch === 2,
      },
    ],
    [activeSwatch, setActiveSwatch]
  );
  return (
    <>
      <div className={styles.top}>
        {isMobile ? (
          <div className={styles.mobileTop}>
            <img onClick={() => setShowSidebar(true)} src={hamburger} alt="" />
            Assessment
          </div>
        ) : (
          <>
            <span className={styles.title}>Assessment</span>
            <div className={styles.horizontalDivider}></div>
          </>
        )}
        <SwatchBar
          swatches={swatches}
          activeSwatch={activeSwatch}
          setActiveSwatch={setActiveSwatch}
          isMobile={isMobile}
        />
      </div>
      <div className={styles.bottom}>
        {activeSwatch === 1 && <MyAssessments isMobile={isMobile}/>}
        {activeSwatch === 2 && <UnstopAssessments />}
      </div>
    </>
  );
};

export default Assessment;
