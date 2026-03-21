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
  const { getState, updateState, resetState } = useStore();

  const onSubmit = (event) => {
    event.preventDefault();
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
          placeholder="Email"
          onChange={onChange}
        />
        <input
          type="text"
          name="login"
          value={login}
          placeholder="login"
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={onChange}
        />
        <input
          type="phone"
          name="phone"
          value={phone}
          placeholder="Phone"
          onChange={onChange}
        />
        <button type="button" onClick={resetState}>
          Reset
        </button>
        <button>Send</button>
      </form>
      <hr />
    </>
  );
};
