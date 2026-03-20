import styles from "./ControlledUncontrolledFields.module.less";
import { useState } from "react";

export const ControlledUncontrolledFields = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <h2>ControlledUncontrolledFields</h2>
      <input
        // type="text"
        type="checkbox"
        // value={value}
        // onChange={({ target }) => setValue(target.value)}
      />
      <div className={styles.content}>Любой контент</div>
      <hr />
    </>
  );
};
