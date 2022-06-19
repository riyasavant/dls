import { FunctionComponent, useState } from "react";
import styles from "./Switch.module.scss";
import classNames from "classnames";

export const Switch: FunctionComponent<any> = () => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" />
      <span className={styles.slider}></span>
    </label>
  );
};
