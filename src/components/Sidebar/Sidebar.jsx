import React, { useMemo } from "react";
import styles from "./Sidebar.module.css";
import dashboard from "../../assets/dashboard.svg";
import note from "../../assets/note_alt.svg";
import quiz from "../../assets/quiz.svg";
import admin_meds from "../../assets/admin_meds.svg";
import Item from "./Item";
const Sidebar = ({ activeState, setActiveState }) => {
  const items = useMemo(
    () => [
      {
        name: "Dashboard",
        icon: dashboard,
        onClick: () => {
          setActiveState(1);
        },
        admin: false,
        active: activeState === 1,
      },
      {
        name: "Assessment",
        icon: note,
        onClick: () => {
          setActiveState(2);
        },
        admin: false,
        active: activeState === 2,
      },
      {
        name: "My Library",
        icon: quiz,
        onClick: () => {
          setActiveState(3);
        },
        admin: false,
        active: activeState === 3,
      },
      {
        name: "Round Status",
        icon: admin_meds,
        onClick: () => {
          setActiveState(4);
        },
        admin: true,
        active: activeState === 4,
      },
    ],
    [activeState, setActiveState]
  );
  return (
    <div className={styles.container}>
      {items.map((e) => {
        if (!e.admin) {
          return (
            <Item
              icon={e.icon}
              name={e.name}
              onClick={e.onClick}
              active={e.active}
            />
          );
        } else {
          return <></>;
        }
      })}
      <div className={styles.adminOpt}>
        <div className={styles.dash}></div>
        <div className={styles.admin}>Admin</div>
      </div>
      {items.map((e) => {
        if (e.admin) {
          return (
            <Item
              icon={e.icon}
              name={e.name}
              onClick={e.onClick}
              active={e.active}
            />
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
};

export default Sidebar;
