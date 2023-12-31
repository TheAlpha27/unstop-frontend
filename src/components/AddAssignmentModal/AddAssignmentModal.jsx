import React, { useEffect, useRef, useState } from "react";
import styles from "./AddAssignmentModal.module.css";
import cut from "../../assets/cut.svg";
import close from "../../assets/close.svg";

const AddAssignmentModal = ({
  openAddModal,
  setOpenAddModal,
  assessmentData,
  setAssessmentData,
}) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [errors, setErrors] = useState({
    title: false,
    type: false,
    duration: false,
  });
  const [endAnimation, setEndAnimation] = useState(false);

  const [assessment, setAssessment] = useState({
    title: "",
    type: "",
    desc: "",
    skils: [],
    duration: "",
    questions: 3,
    users: [
      { name: "Sagar Thakur", bg: "#E9407A" },
      { name: "Utsav Soni", bg: "#6548ee" },
      { name: "Aman Pratap", bg: "#3079E1" },
      { name: "Shiva Singh", bg: "#E9407A" },
    ],
    date: "",
  });

  const closeModal = () => {
    setEndAnimation(true);
    setTimeout(() => {
      setAssessment({
        title: "",
        type: "",
        desc: "",
        skils: [],
        duration: "",
        questions: 3,
        users: [
          { name: "Sagar Thakur", bg: "#E9407A" },
          { name: "Utsav Soni", bg: "#6548ee" },
          { name: "Aman Pratap", bg: "#3079E1" },
          { name: "Shiva Singh", bg: "#E9407A" },
        ],
        date: "",
      });
      setErrors({
        title: false,
        type: false,
        duration: false,
        date: false,
      });
      setOpenAddModal(false);
      setEndAnimation(false);
    }, 500);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target === ref1.current) {
        setEndAnimation(true);
        setTimeout(() => {
          setAssessment({
            title: "",
            type: "",
            desc: "",
            skils: [],
            duration: "",
            questions: 3,
            users: [
              { name: "Sagar Thakur", bg: "#E9407A" },
              { name: "Utsav Soni", bg: "#6548ee" },
              { name: "Aman Pratap", bg: "#3079E1" },
              { name: "Shiva Singh", bg: "#E9407A" },
            ],
            date: "",
          });
          setErrors({
            title: false,
            type: false,
            duration: false,
            date: false,
          });
          setOpenAddModal(false);
          setEndAnimation(false);
        }, 450);
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [setOpenAddModal]);

  const handleSave = () => {
    let err = false;
    for (const key in assessment) {
      if (errors.hasOwnProperty(key)) {
        if (!assessment[key]) {
          let temp = { ...errors };
          temp[key] = true;
          err = true;
        }
      }
    }
    if (!err) {
      setErrors({
        title: false,
        type: false,
        duration: false,
      });
      let temp = { ...assessment };
      const currentDate = new Date();
      const options = { day: "2-digit", month: "short", year: "numeric" };
      const formattedDate = new Intl.DateTimeFormat("en-US", options)
        .format(currentDate)
        .split(" ");
      const newDate =
        formattedDate[1].substring(0, 2) +
        " " +
        formattedDate[0] +
        " " +
        formattedDate[2];
      temp.date = newDate;
      const assessmentDataLocal = localStorage.getItem("assessmentData");
      if (assessmentDataLocal) {
        console.log("Local: ", JSON.parse(assessmentDataLocal));
      }
      let dataToBeSaved = [...assessmentData];
      dataToBeSaved.push(temp);
      console.log("dataToBeSaved: ", dataToBeSaved);
      setAssessmentData(dataToBeSaved);
      localStorage.setItem("assessmentData", JSON.stringify(dataToBeSaved));
      closeModal();
    }
  };

  if (!openAddModal) {
    return <></>;
  }
  return (
    <div
      ref={ref1}
      className={`${styles.container} ${endAnimation ? styles.endFade : ""}`}
    >
      <div
        ref={ref2}
        className={`${styles.modal} ${endAnimation ? styles.endDown : ""}`}
      >
        <div className={styles.modalTop}>
          <div className={styles.modalTitle}>Create new assessment</div>
          <img onClick={closeModal} src={cut} alt="" className="pointer" />
        </div>
        <div className={styles.mid}>
          <div className={styles.input}>
            <div className={styles.label}>Name of assessment</div>
            <input
              type="text"
              className={`${styles.txtInp} ${errors.title ? styles.error : ""}`}
              placeholder="Type Here"
              value={assessment.title}
              onChange={(e) =>
                setAssessment({ ...assessment, title: e.target.value })
              }
            />
          </div>
          <div className={styles.input}>
            <div className={styles.label}>Purpose of the test is</div>
            <select
              name="Purpose"
              id="purpose"
              value={assessment.type}
              className={`${styles.select} ${errors.type ? styles.error : ""}`}
              onChange={(e) =>
                setAssessment({ ...assessment, type: e.target.value })
              }
            >
              <option value="">Select</option>
              <option value="Job">Job</option>
              <option value="Practice">Practice</option>
            </select>
          </div>
          <div className={styles.input}>
            <div className={styles.label}>Description</div>
            <select
              name="Description"
              id="desc"
              value={assessment.desc}
              className={styles.select}
              onChange={(e) =>
                setAssessment({ ...assessment, desc: e.target.value })
              }
            >
              <option value="">Select</option>
              <option value="Desc1">Desc1</option>
              <option value="Desc2">Desc2</option>
            </select>
          </div>
          <div className={styles.input} style={{ gap: "0px" }}>
            <div className={styles.label} style={{ paddingBottom: "10px" }}>
              Skills
            </div>
            <div className={styles.skills}>
              {assessment.skils.map((e, index) => {
                return (
                  <div className={styles.skillCell}>
                    {e}{" "}
                    <img
                      className="pointer"
                      src={close}
                      alt=""
                      onClick={() => {
                        let temp = [...assessment.skils];
                        temp.splice(index, 1);
                        setAssessment({ ...assessment, skils: temp });
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <input
              type="text"
              className={styles.txtInp}
              placeholder="Type Here"
              style={{
                borderTopRightRadius: "0px",
                borderTopLeftRadius: "0px",
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const temp = [...assessment.skils];
                  temp.push(e.target.value);
                  setAssessment({ ...assessment, skils: temp });
                  e.target.value = "";
                }
              }}
            />
          </div>
          <div className={styles.input}>
            <div className={styles.label}>Duration of assessment</div>
            <input
              type="time"
              className={`${styles.txtInp} ${
                errors.duration ? styles.error : ""
              }`}
              placeholder="Type Here"
              value={assessment.duration}
              onChange={(e) => {
                setAssessment({ ...assessment, duration: e.target.value });
              }}
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <button className={styles.save} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAssignmentModal;
