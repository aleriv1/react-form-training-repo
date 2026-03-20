import { useState } from "react";

const initialState = {
  email: "",
  login: "",
  password: "",
  phone: "",
};

const useStore = () => {
  const [state, setState] = useState(initialState);
  return {
    getState: () => state,
    updateState: (fieldName, newValue) => {
      setState({ ...state, [fieldName]: newValue });
    },
    resetState: () => {
      setState(initialState);
    },
  };
};
const sendData = (formData) => {
  console.log(formData);
};

export const MultipleFormField = () => {
  // const [email, setEmail] = useState("");
  // const [login, setLogin] = useState("");
  // const [password, setPassword] = useState("");

  // const [formdata, setFormdata] = useState({
  //   email: "",
  //   login: "",
  //   password: "",
  // });
  const { getState, updateState, resetState } = useStore();

  const onSubmit = (event) => {
    event.preventDefault();
    // sendData({ email, login, password });
    // sendData(initialState);
    sendData(getState());
  };

  const { email, login, password, phone } = getState();

  const onChange = ({ target }) => updateState(target.name, target.value);

  return (
    <>
      <h2>MultipleFormField</h2>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          // value={formdata.email}
          placeholder="Email"
          // onChange={({ target }) => setEmail(target.value)}
          onChange={
            // ({ target }) => updateState("email", target.value)
            onChange
            // setFormdata({
            //   ...formdata,
            //   email: target.value,
            // })
          }
        />
        <input
          type="text"
          name="login"
          value={login}
          // value={formdata.login}
          placeholder="login"
          // onChange={({ target }) => setLogin(target.value)}
          onChange={
            // ({ target }) => updateState("login", target.value)
            onChange
            // setFormdata({
            //   ...formdata,
            //   login: target.value,
            // })
          }
        />
        <input
          type="password"
          name="password"
          value={password}
          // value={formdata.password}
          placeholder="Password"
          // onChange={({ target }) => setPassword(target.value)}
          onChange={
            // ({ target }) => updateState("password", target.value)
            onChange
            // setFormdata({
            //   ...formdata,
            //   password: target.value,
            // })
          }
        />
        <input
          type="phone"
          name="phone"
          value={phone}
          placeholder="Phone"
          // onChange={({ target }) => updateState("phone", target.value)}
          onChange={onChange}
        />
        <button onClick={resetState}>Reset</button>
        <button>Send</button>
      </form>
      <hr />
    </>
  );
};
