import React, { useMemo } from "react";
import styles from "./MyAssessments.module.css";
import totalAssessment from "../../../assets/view_agenda.svg";
import candidate from "../../../assets/candidate.svg";
import candidateSource from "../../../assets/candidate_source.svg";
import totalPurpose from "../../../assets/total_purpose.svg";

const AssessmentsOverview = () => {
  const overviewOptions = useMemo(
    () => [
      {
        name: "Total Assessments",
        icon: totalAssessment,
        bgColor: "#EBE8FD",
        options: [
          {
            value: 34,
            diff: null,
            subText: "",
          },
        ],
      },
      {
        name: "Candidates",
        icon: candidate,
        options: [
          {
            value: 11145,
            diff: 89,
            subText: "Total Candidates",
          },
          {
            value: 114,
            diff: 89,
            subText: "Who Attempted",
          },
        ],
      },
      {
        name: "Candidate Source",
        icon: candidateSource,
        options: [
          {
            value: 11000,
            diff: 89,
            subText: "E-mail",
          },
          {
            value: 145,
            diff: 89,
            subText: "Social Share",
          },
          {
            value: 145,
            diff: 89,
            subText: "Unique Link",
          },
        ],
      },
      {
        name: "Total Purpose",
        icon: totalPurpose,
        options: [
          {
            value: 11,
            diff: null,
            subText: "",
          },
        ],
      },
    ],
    []
  );
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.title}>Assessments Overview</div>
      <div className={styles.overviewCards}>
        {overviewOptions.map((e, idx) => {
          return (
            <div
              className={styles.card}
              style={{
                borderLeft: idx === 0 ? "" : "1px solid #dadce0",
              }}
            >
              <div className={styles.cardTitle}>{e.name}</div>
              <div className={styles.cardBody}>
                {idx === 0 ? (
                  <div
                    style={{ background: e?.bgColor }}
                    className={styles.iconFrame}
                  >
                    <img src={e.icon} className={styles.iconImg} alt="" />
                  </div>
                ) : (
                  <img src={e.icon} alt="" />
                )}
                <div className={styles.metricContainer}>
                  {e.options.map((elem, ind) => {
                    return (
                      <>
                        <div className={styles.metric}>
                          <div className={styles.metricTop}>
                            <div className={styles.value}>{elem.value}</div>
                            {elem.diff && (
                              <div className={styles.diff}>+{elem.diff}</div>
                            )}
                          </div>
                          <div className={styles.subText}>{elem.subText}</div>
                        </div>
                        {ind < e.options.length - 1 && (
                          <div className={styles.horizontalDivider}></div>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MyAssessments = () => {
  return (
    <div className={styles.container}>
      <AssessmentsOverview />
    </div>
  );
};

export default MyAssessments;
