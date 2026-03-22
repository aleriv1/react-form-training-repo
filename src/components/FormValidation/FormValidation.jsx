import styles from "./FormValidation.module.css";
import { useState } from "react";

export const FormValidation = () => {
  const [login, setLogin] = useState("");
  const [loginError, setLoginError] = useState(null);

  const onLoginChange = ({ target }) => {
    setLogin(target.value);
    let error = null;
    if (!/^[\w_]*$/.test(target.value)) {
      error =
        "invalid login. Allowed symbols -- letters, numbers and underline";
    } else if (target.value.length > 20) {
      error = "Invalid login. There should be no more 20 symbols";
    }
    setLoginError(error);
  };

  const onLoginBlur = () => {
    if (login.length < 3) {
      setLoginError("Invalid login. There shoud be at least 3 symbols.");
    }
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
