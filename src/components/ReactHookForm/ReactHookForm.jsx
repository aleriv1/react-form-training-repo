import styles from "./ReactHookForm.module.scss";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

export const ReactHookForm = () => {
  return (
    <>
      <form>
        {loginError && <div className={styles.errorLablel}>{loginError}</div>}
        <input type="text" name="login" />
        {/* <button disabled={loginError !== null}>Send</button> */}
        <button disabled={loginError}>Send</button>
      </form>
    </>
  );
};
