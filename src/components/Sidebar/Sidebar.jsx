import React from "react";
import styles from "./Sidebar.module.css";
import Item from "./Item";
const Sidebar = ({ items }) => {
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
