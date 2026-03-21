import { useState } from "react";
import "./App.css";
// import { Test } from "./components/test/test";
import { ControlledUncontrolledFields } from "./components/ControlledUncontrolledFields/ControlledUncontrolledFields";
import { MultipleFormField } from "./components/MultipleFormField/MultipleFormField";
import { WorkWithSelect } from "./components/WorkWithSelect/WorkWithSelect";
import { ReactSelectLibrary } from "./components/ReactSelectLibrary/ReactSelectLibrary";
import { FormValidation } from "./components/FormValidation/FormValidation";
import { Yup } from "./components/Yup/Yup";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <Yup />
      {/* <FormValidation /> */}
      {/* <ReactSelectLibrary /> */}
      {/* <WorkWithSelect /> */}
      {/* <MultipleFormField /> */}
      {/* <Test /> */}

      {/* <ControlledUncontrolledFields /> */}
    </>
  );
}

export default App;
