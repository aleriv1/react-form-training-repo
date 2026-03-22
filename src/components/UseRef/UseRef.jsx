import * as yup from "yup";
import styles from "./UseRef.module.scss";
import { useState, useRef } from "react";

// creating a scheme
const loginChangeScheme = yup
  .string()
  .matches(
    /^[\w_]*$/,
    "invalid login. Allowed symbols -- letters, numbers and underline",
  )
  .max(20, "Invalid login. Allowed symbols -- letters, numbers and underline");

const loginBlurScheme = yup
  .string()
  .min(3, "Invalid login. There shoud be at least 3 symbols.");

const validateAndGetErrorMessage = (scheme, value) => {
  let errorMessage = null;
  try {
    scheme.validateSync(value, { abortEarly: false });
  } catch ({ errors }) {
    // errorMessage = errors[0];
    // errorMessage = errors.join("/n");
    // console.log(errorMessage);
    errorMessage = errors
      .reduce((message, error) => message + error + "\n", "")
      // .reduce((message, error) => message + error + "n", "")
      // .reduce((message, error) => message + error + "<br>", "")
      .trim();
  }
  return errorMessage;
};

export const UseRef = () => {
  const [login, setLogin] = useState("");
  const [loginError, setLoginError] = useState(null);

  const submitButtonRef = useRef(null);

  const onLoginChange = ({ target }) => {
    setLogin(target.value);
    const error = validateAndGetErrorMessage(loginChangeScheme, target.value);
    setLoginError(error);

    if (target.value.length === 20) {
      console.log(submitButtonRef);
      submitButtonRef.current.focus();
    }
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
        <button
          className="button"
          ref={submitButtonRef}
          disabled={loginError !== null}
        >
          Send
        </button>
      </form>
    </>
  );
};
