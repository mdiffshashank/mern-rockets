import React from "react";
import styles from "./MainContainer.module.css";
import SideBar from "./SideBar";
import Rockets from "./Rockets";

function MainContainer() {
    // const h = {
    //     height:'1000px',
    // }
  return (
    // <div style={h} className={styles.mainContainer}>
    <div className={styles.mainContainer}>
      <SideBar/>
      <Rockets/>
    </div>
  );
}

export default MainContainer;
