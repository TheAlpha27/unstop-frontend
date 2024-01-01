import React, { useEffect, useRef, useState } from "react";
import styles from "./SidebarMobile.module.css";
import cut from "../../assets/cutMob.svg";

const SidebarMobile = ({ items, setShowSidebar }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [endAnimation, setEndAnimation] = useState(false);

  const closeModal = () => {
    setEndAnimation(true);
    setTimeout(() => {
      setShowSidebar(false);
      setEndAnimation(false);
    }, 450);
  };
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target === ref1.current) {
        setEndAnimation(true);
        setTimeout(() => {
          setShowSidebar(false);
          setEndAnimation(false);
        }, 450);
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [setShowSidebar]);
  return (
    <div
      className={`${styles.container} ${endAnimation ? styles.endFade : ""}`}
      ref={ref1}
    >
      <div
        className={`${styles.menu} ${endAnimation ? styles.endSlide : ""}`}
        ref={ref2}
      >
        <div className={styles.top}>
          Menu
          <img src={cut} onClick={closeModal} className={styles.cut} alt="" />
        </div>
        <div className={styles.mid}>
          {items.map((e) => {
            return (
              <div
                className={`${styles.item} ${
                  e.active ? styles.activeItem : ""
                }`}
                onClick={closeModal}
              >
                <img src={e.icon} alt="" />
                <div>{e.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
