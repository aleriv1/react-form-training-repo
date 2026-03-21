import { useState } from "react";
import "./App.css";
// import { Test } from "./components/test/test";
import { ControlledUncontrolledFields } from "./components/ControlledUncontrolledFields/ControlledUncontrolledFields";
import { MultipleFormField } from "./components/MultipleFormField/MultipleFormField";
import { WorkWithSelect } from "./components/WorkWithSelect/WorkWithSelect";
import { ReactSelectLibrary } from "./components/ReactSelectLibrary/ReactSelectLibrary";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <ReactSelectLibrary />
      {/* <WorkWithSelect /> */}
      {/* <MultipleFormField /> */}
      {/* <Test /> */}

      {/* <ControlledUncontrolledFields /> */}
    </>
  );
}

export default App;
