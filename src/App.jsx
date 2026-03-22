import { useState } from "react";
import "./App.css";
// import { Test } from "./components/test/test";
import { ControlledUncontrolledFields } from "./components/ControlledUncontrolledFields/ControlledUncontrolledFields";
import { MultipleFormField } from "./components/MultipleFormField/MultipleFormField";
import { WorkWithSelect } from "./components/WorkWithSelect/WorkWithSelect";
import { ReactSelectLibrary } from "./components/ReactSelectLibrary/ReactSelectLibrary";
import { FormValidation } from "./components/FormValidation/FormValidation";
// import { Yup } from "./components/Yup/Yup";
import { UseRef } from "./components/UseRef/UseRef";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <UseRef />
      {/* <Yup /> */}
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
