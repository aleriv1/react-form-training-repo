import styles from "./ReactHookFormWithYup.module.scss";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

export const ReactHookFormWithYup = () => {
  const {
    register, // the method that returns usual props for input which it understands (it returns the objects)
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
    },
  });

  const loginError = errors.login?.message;

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const loginProps = {
    minLength: { value: 3, message: "Must be more than 3 characters" },
    maxLength: { value: 20, message: "Must be less than 20 characters" },
    pattern: {
      value: /^[\w_]*$/,
      message: "Must use letters, numbers or underscore",
    }, // regular expression match
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <div className={styles.errorLablel}>{loginError}</div>}
        <input type="text" name="login" {...register("login", loginProps)} />
        {/* <button disabled={loginError !== null}>Send</button> */}
        {/* <button disabled={loginError}>Send</button> */}
        <button disabled={!!loginError}>Send</button>
      </form>
    </>
  );
};
