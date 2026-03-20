import { useState } from "react";

const sendData = (formData) => {
  console.log(formData);
};

export const MultipleFormField = () => {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    sendData({ email, login, password });
  };

  return (
    <>
      <h2>MultipleFormField</h2>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="text"
          name="login"
          value={login}
          placeholder="login"
          onChange={({ target }) => setLogin(target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Send</button>
      </form>
      <hr />
    </>
  );
};
