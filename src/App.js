import React from "react";
import FormCreate from "./Form";
import { Input, Button } from "antd";
import "./styles.css";

function App({ form }) {
  // const value = form.getFieldValue();
  const func = (...args) => {
    console.log(args);
  };

  const commonFunc = function(...args) {
    console.log(args);
  };

  return (
    <div className="App">
      <Input {...form.getFieldProps()} />
      <Button
        onClick={() => {
          const value = form.getFieldsValue();
          console.log(value);
          commonFunc(2, 123, 3);
        }}
      >
        提交
      </Button>
    </div>
  );
}

export default FormCreate()(App);
