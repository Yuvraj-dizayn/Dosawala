import React from "react";
import styles from "./LastComp.module.scss";

const LastComp = (props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Left_Container}>
        <h4 className={styles.Left_Container_Title}>Contact us for more</h4>
        <div className={styles.Left_Container_Email}>
          <img
            src={props.Email_Image}
            alt=""
            className={styles.Left_Container_Email_Image}
          />
          <p className={styles.Left_Container_Email_Desc}>
            franchise@dosawalaindia.com
          </p>
        </div>
        <div className={styles.Left_Container_Call}>
          <img
            src={props.Call_Image}
            alt=""
            className={styles.Left_Container_Call_Image}
          />
          <p className={styles.Left_Container_Call_Desc}>+91 8510957376</p>
        </div>
        <p className={styles.Left_Container_Desc}>
          Varieties of Traditional South FoodFirst time in Gujarat, Introducing
          Unlimited south Indian Meal with 51 Delicious south Indian items.
        </p>
      </div>
      <div className={styles.Right_Container}>
        <img
          src={props.image}
          alt=""
          className={styles.Right_Container_Image}
        />
      </div>
    </div>
  );
};

export default LastComp;
