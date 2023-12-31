import React, { useEffect, useRef } from "react";
import styles from "./AddAssignmentModal.module.css";
import cut from "../../assets/cut.svg";

const AddAssignmentModal = ({ openAddModal, setOpenAddModal }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target === ref1.current) {
        setOpenAddModal(false);
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [setOpenAddModal]);

  if (!openAddModal) {
    return <></>;
  }
  return (
    <div ref={ref1} className={styles.container}>
      <div ref={ref2} className={styles.modal}>
        <div className={styles.modalTop}>
          <div className={styles.modalTitle}>Create new assessment</div>
          <img
            onClick={() => setOpenAddModal(false)}
            src={cut}
            alt=""
            className={styles.close}
          />
        </div>
        <div className={styles.mid}>
            
        </div>
      </div>
    </div>
  );
};

export default AddAssignmentModal;
