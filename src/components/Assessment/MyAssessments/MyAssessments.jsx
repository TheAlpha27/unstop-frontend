import React, { useEffect, useMemo, useState } from "react";
import styles from "./MyAssessments.module.css";
import totalAssessment from "../../../assets/view_agenda.svg";
import candidate from "../../../assets/candidate.svg";
import candidateSource from "../../../assets/candidate_source.svg";
import totalPurpose from "../../../assets/total_purpose.svg";
import add from "../../../assets/add.svg";
import assessment from "../../../assets/assessment.svg";
import threeDots from "../../../assets/three_dots.svg";
import calendar from "../../../assets/calendar.svg";
import share from "../../../assets/share.svg";
import search from "../../../assets/search.svg";
import barChart from "../../../assets/bar-chart.svg";
import filter from "../../../assets/filter-list-alt.svg";
import addWhite from "../../../assets/add_white.svg";
import { addCommasToNumber, getInitials } from "../../../helper";
import AddAssignmentModal from "../../AddAssignmentModal/AddAssignmentModal";

const assessmentDataINI = [
  {
    title: "Maths Assessment",
    users: [{ name: "Utsav Soni", bg: "#6548ee" }],
    date: "20 Apr 2023",
    type: "Job",
    duration: "01:30",
    questions: 3,
  },
  {
    title: "Physics Assessment",
    users: [
      { name: "Utsav Soni", bg: "#6548ee" },
      { name: "Aman Pratap", bg: "#3079E1" },
      { name: "Shiva Singh", bg: "#E9407A" },
    ],
    date: "2 Jan 2024",
    type: "Job",
    duration: "02:00",
    questions: 5,
  },
  {
    title: "Coding Assessment",
    users: [
      { name: "Sagar Thakur", bg: "#E9407A" },
      { name: "Utsav Soni", bg: "#6548ee" },
      { name: "Aman Pratap", bg: "#3079E1" },
      { name: "Shiva Singh", bg: "#E9407A" },
    ],
    date: "2 Jan 2024",
    type: "Job",
    duration: "02:00",
    questions: 2,
  },
];

const AssessmentsOverview = ({
  assessmentData,
  isMobile,
  startEndAnimation,
}) => {
  const overviewOptions = useMemo(
    () => [
      {
        name: "Total Assessments",
        icon: totalAssessment,
        bgColor: "#EBE8FD",
        options: [
          {
            value: assessmentData?.length,
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
            value: 12145,
            diff: 280,
            subText: "Total Candidates",
          },
          {
            value: 1225,
            diff: 90,
            subText: "Who Attempted",
          },
        ],
      },
      {
        name: "Candidate Source",
        icon: candidateSource,
        options: [
          {
            value: 11500,
            diff: 179,
            subText: "E-mail",
          },
          {
            value: 344,
            diff: 35,
            subText: "Social Share",
          },
          {
            value: 145,
            diff: 21,
            subText: "Unique Link",
          },
        ],
      },
      {
        name: "Total Purpose",
        icon: totalPurpose,
        options: [
          {
            value: 16,
            diff: null,
            subText: "",
          },
        ],
      },
    ],
    [assessmentData?.length]
  );
  if (isMobile) {
    let temp = overviewOptions[overviewOptions.length - 1];
    overviewOptions[overviewOptions.length - 1] = overviewOptions[1];
    overviewOptions[1] = temp;
  }
  return (
    <div className={`${styles.overviewContainer}`}>
      {!isMobile && <div className={styles.title}>Assessments Overview</div>}
      <div
        className={`${styles.overviewCards} ${
          startEndAnimation ? styles.endAnimation : ""
        }`}
      >
        {overviewOptions.map((e, idx) => {
          return (
            <div
              className={styles.card}
              style={{
                borderLeft: idx === 0 ? "" : "1px solid #dadce0",
                borderBottom:
                  isMobile && idx < overviewOptions.length - 1
                    ? "1px solid #dadce0"
                    : "",
                flexGrow: `${isMobile ? "1" : e.options.length}`,
              }}
            >
              <div className={styles.cardTitle} style={{ textWrap: "nowrap" }}>
                {e.name}
              </div>
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
                            <div className={styles.value}>
                              {addCommasToNumber(elem?.value)}
                            </div>
                            {elem.diff && (
                              <div className={styles.diff}>+{elem.diff}</div>
                            )}
                          </div>
                          <div
                            className={styles.subText}
                            style={{ textWrap: "nowrap" }}
                          >
                            {elem.subText}
                          </div>
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

const AssessmentCard = ({ data, handleDelete }) => {
  const [showDelete, setShowDelete] = useState(false);
  return (
    <div className={styles.assessmentCard}>
      <div className={styles.assessmentCardTop}>
        <img src={assessment} alt="" />
        <img
          onClick={() => {
            setShowDelete(!showDelete);
          }}
          className={styles.threeDots}
          src={threeDots}
          alt=""
        />
        {showDelete && (
          <div
            className={styles.delete}
            onClick={() => {
              handleDelete(data);
              setShowDelete(false);
            }}
          >
            Delete
          </div>
        )}
      </div>
      <div className={styles.assessmentCardMid}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.dateDetails}>
          <div className={styles.cardTitle}>{data.type}</div>
          <div className={styles.smDivider}></div>
          <div className={styles.date}>
            <img src={calendar} alt="" />
            <div>{data.date}</div>
          </div>
        </div>
      </div>
      <div className={styles.dashDivider}></div>
      <div className={styles.assessmentCardBottom}>
        <div className={styles.bottomLeft}>
          <div>
            <div className={styles.cardTitle}>{data.duration}</div>
            <div className={styles.subText}>Duration</div>
          </div>
          <div>
            <div className={styles.cardTitle}>{data.questions}</div>
            <div className={styles.subText}>Questions</div>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.shareBtn}>
            <img src={share} alt="" />
            <div>Share</div>
          </div>
          <div className={styles.userDotsContainer}>
            {data.users.map((u, i) => {
              if (i < 3) {
                return (
                  <div
                    className={styles.userDot}
                    style={{
                      background: u.bg,
                      zIndex: `${i + 1}`,
                      right: `-${i * 10}px`,
                    }}
                  >
                    {getInitials(u.name)}
                  </div>
                );
              } else {
                return <></>;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const MyAssessmentsDetails = ({
  setOpenAddModal,
  assessmentData,
  setAssessmentData,
  showOverview,
  setshowOverview,
  isMobile,
  setStartEndAnimation,
}) => {
  const handleDelete = (data) => {
    let temp = [...assessmentData];
    temp = temp.filter((e) => e.title !== data.title);
    localStorage.setItem("assessmentData", JSON.stringify(temp));
    setAssessmentData(temp);
  };
  return (
    <div className={styles.overviewContainer}>
      {isMobile ? (
        <div className={styles.mobileTop}>
          <div className={styles.title}>My Assessment</div>
          <div className={styles.icons}>
            {" "}
            <div className={styles.mobIconCont}>
              <img src={search} alt="" />
            </div>
            <div className={styles.mobIconCont}>
              <img src={filter} alt="" />
            </div>
            <div
              onClick={() => {
                if (showOverview) {
                  setStartEndAnimation(true);
                  setTimeout(() => {
                    setStartEndAnimation(false);
                    setshowOverview(false);
                  }, 450);
                } else {
                  setshowOverview(true);
                }
              }}
              className={` ${styles.mobIconCont} ${
                showOverview ? styles.activeMob : ""
              }`}
            >
              <img src={barChart} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.title}>My Assessment</div>
      )}
      <div className={styles.assessmentCardsContainer}>
        <div
          onClick={() => setOpenAddModal(true)}
          className={styles.newAssessmentCard}
        >
          <div className={styles.addBtn}>
            <img src={add} alt="" />
          </div>
          <div className={styles.title}>New Assessment</div>
          <div className={styles.subText}>
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </div>
        </div>
        {assessmentData?.map((e) => {
          return <AssessmentCard data={e} handleDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
};

const MyAssessments = ({ isMobile }) => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [assessmentData, setAssessmentData] = useState();
  const [showOverview, setshowOverview] = useState(false);
  const [startEndAnimation, setStartEndAnimation] = useState(false);
  useEffect(() => {
    const assessmentDataLocal = localStorage.getItem("assessmentData");
    if (assessmentDataLocal.length) {
      let parsedData = JSON.parse(assessmentDataLocal);
      if (parsedData.length > 0) {
        setAssessmentData(parsedData);
      } else {
        setAssessmentData(assessmentDataINI);
      }
    }
  }, []);
  return (
    <div className={styles.container}>
      {isMobile && (
        <div
          onClick={() => setOpenAddModal(true)}
          className={styles.addAssessment}
        >
          <img src={addWhite} alt="" />
        </div>
      )}
      <AddAssignmentModal
        openAddModal={openAddModal}
        setOpenAddModal={setOpenAddModal}
        assessmentData={assessmentData}
        setAssessmentData={setAssessmentData}
      />
      {isMobile ? (
        showOverview && (
          <AssessmentsOverview
            showOverview={showOverview}
            setshowOverview={setshowOverview}
            isMobile={isMobile}
            assessmentData={assessmentData}
            startEndAnimation={startEndAnimation}
          />
        )
      ) : (
        <AssessmentsOverview assessmentData={assessmentData} />
      )}
      <MyAssessmentsDetails
        setOpenAddModal={setOpenAddModal}
        assessmentData={assessmentData}
        setAssessmentData={setAssessmentData}
        setshowOverview={setshowOverview}
        showOverview={showOverview}
        isMobile={isMobile}
        setStartEndAnimation={setStartEndAnimation}
      />
    </div>
  );
};

export default MyAssessments;
