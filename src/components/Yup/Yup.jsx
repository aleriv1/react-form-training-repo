import * as yup from "yup";
import styles from "./Yup.module.css";
import { useState } from "react";

// creating a scheme
const loginChangeScheme = yup
  .string()
  .matches(
    /^[\w_]*$/,
    "invalid login. Allowed symbols -- letters, numbers and underline",
  )
  .max(20, "invalid login. Allowed symbols -- letters, numbers and underline");

const loginBlurScheme = yup
  .string()
  .min(3, "Invalid login. There shoud be at least 3 symbols.");

const validateAndGetErrorMessage = (scheme, value) => {
  let errorMessage = null;
  try {
    scheme.validateSync(value);
  } catch ({ errors }) {
    errorMessage = errors[0];
  }
  return errorMessage;
};

export const Yup = () => {
  const [login, setLogin] = useState("");
  const [loginError, setLoginError] = useState(null);

  const onLoginChange = ({ target }) => {
    setLogin(target.value);
    const error = validateAndGetErrorMessage(loginChangeScheme, target.value);

    setLoginError(error);
  };

  const onLoginBlur = () => {
    const error = validateAndGetErrorMessage(loginBlurScheme, login);
    setLoginError(error);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(login);
  };

  return (
    <>
      <h2>FormValidation</h2>
      <form onSubmit={onSubmit}>
        {loginError && <div className={styles.errorLabel}>{loginError}</div>}
        <input
          type="text"
          name="login"
          value={login}
          placeholder="login"
          onChange={onLoginChange}
          onBlur={onLoginBlur}
        />
        <button disabled={loginError !== null}>Send</button>
      </form>
    </>
  );
};
