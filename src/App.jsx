import { useState } from "react";
import "./App.css";
// import { Test } from "./components/test/test";
import { ControlledUncontrolledFields } from "./components/ControlledUncontrolledFields/ControlledUncontrolledFields";
import { MultipleFormField } from "./components/MultipleFormField/MultipleFormField";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <MultipleFormField />
      {/* <Test /> */}

      <ControlledUncontrolledFields />
    </>
  );
}

export default App;
