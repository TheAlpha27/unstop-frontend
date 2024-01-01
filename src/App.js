import { useMemo, useState } from "react";
import styles from "./App.module.css";
import Assessment from "./components/Assessment/Assessment";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import MyLibrary from "./components/MyLibrary/MyLibrary";
import RoundStatus from "./components/RoundStatus/RoundStatus";
import useMediaQuery from "./mediaQueryHook";
import dashboard from "./assets/dashboard.svg";
import note from "./assets/note_alt.svg";
import quiz from "./assets/quiz.svg";
import admin_meds from "./assets/admin_meds.svg";
import SidebarMobile from "./components/Sidebar/SidebarMobile";

function App() {
  const [activeState, setActiveState] = useState(2); // 1: Dashboard, 2: Assessment, 3: My Library, 4: Round Status
  const [showSidebar, setShowSidebar] = useState(false);
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
  const isMobile = useMediaQuery("(max-width: 760px)");

  return (
    <div className={styles.App}>
      {isMobile ? (
        showSidebar && (
          <SidebarMobile items={items} setShowSidebar={setShowSidebar} />
        )
      ) : (
        <Sidebar items={items} />
      )}
      <div className={styles.container}>
        {activeState === 1 && <Dashboard />}
        {activeState === 2 && (
          <Assessment isMobile={isMobile} setShowSidebar={setShowSidebar} />
        )}
        {activeState === 3 && <MyLibrary />}
        {activeState === 4 && <RoundStatus />}
      </div>
    </div>
  );
}

export default App;
