import styles from "./test.module.less";
import { useState } from "react";

export const Test = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <input type="checkbox" />
      <div className={styles.content}>Любой контент</div>
    </>
  );
};
