import React, { useMemo, useState } from "react";
import styles from "./Sidebar.module.css";
import dashboard from "../../assets/dashboard.svg";
import note from "../../assets/note_alt.svg";
import quiz from "../../assets/quiz.svg";
import admin_meds from "../../assets/admin_meds.svg";
import Item from "./Item";
const Sidebar = () => {
  const [activeState, setActiveState] = useState("Assessment");
  const items = useMemo(
    () => [
      {
        name: "Dashboard",
        icon: dashboard,
        onClick: () => {
          setActiveState("Dashboard");
        },
        admin: false,
        active: activeState === "Dashboard",
      },
      {
        name: "Assessment",
        icon: note,
        onClick: () => {
          setActiveState("Assessment");
        },
        admin: false,
        active: activeState === "Assessment",
      },
      {
        name: "My Library",
        icon: quiz,
        onClick: () => {
          setActiveState("My Library");
        },
        admin: false,
        active: activeState === "My Library",
      },
      {
        name: "Round Status",
        icon: admin_meds,
        onClick: () => {
          setActiveState("Round Status");
        },
        admin: true,
        active: activeState === "Round Status",
      },
    ],
    [activeState]
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
