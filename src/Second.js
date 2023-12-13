import React from "react";
// import "./Second.scss";
import Download_Icon from "./Image/Download_Icon.png";

import styles from "./Second.module.scss";

const Second = () => {
  return (
    <div className={styles.Main_Container}>
      <div className={styles.Main_Container_Desc_Container}>
        <div className={styles.Main_Container_Desc_Container_Desc1}>
          <h3 className={styles.Main_Container_Desc_Container_Title}>VISION</h3>
          <p className={styles.Main_Container_Desc_Container_DescOne}>
            To formulate a memorable experience by preserving the highest
            standard of quality, hygiene, service and customer satisfaction.
          </p>
        </div>
        <div className={styles.Main_Container_Desc_Container_Desc2}>
          <h3 className={styles.Main_Container_Desc_Container_Title}>
            MISSION
          </h3>
          <p className={styles.Main_Container_Desc_Container_DescTwo}>
            To frequently offer value addition in all spheres thereby inducing
            loyalty by patrons. To obtain, recreate and replicate the brand
            experience in as many areas as possible.
          </p>
        </div>
      </div>
      <div className={styles.Main_Container_Second_Container}>
        <h3 className={styles.Main_Container_Second_Container_Title}>
          For more information
        </h3>
        <div className={styles.Main_Container_Second_Container_One}>
          <img
            src={Download_Icon}
            alt=""
            className={styles.Main_Container_Second_Container_One_Image}
          />
          <h5 className={styles.Main_Container_Second_Container_One_Title}>
            Download our menu
          </h5>
        </div>
        <div className={styles.Main_Container_Second_Container_Two}>
          <img
            src={Download_Icon}
            alt=""
            className={styles.Main_Container_Second_Container_One_Image}
          />
          <h5 className={styles.Main_Container_Second_Container_One_Title}>
            Download our menu
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Second;
