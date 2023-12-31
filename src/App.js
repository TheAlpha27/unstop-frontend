import { useState } from "react";
import styles from "./App.module.css";
import Assessment from "./components/Assessment/Assessment";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import MyLibrary from "./components/MyLibrary/MyLibrary";
import RoundStatus from "./components/RoundStatus/RoundStatus";

function App() {
  const [activeState, setActiveState] = useState(2); // 1: Dashboard, 2: Assessment, 3: My Library, 4: Round Status
  return (
    <div className={styles.App}>
      <Sidebar activeState={activeState} setActiveState={setActiveState} />
      <div className={styles.container}>
        {activeState === 1 && <Dashboard />}
        {activeState === 2 && <Assessment />}
        {activeState === 3 && <MyLibrary />}
        {activeState === 4 && <RoundStatus />}
      </div>
    </div>
  );
}

export default App;
