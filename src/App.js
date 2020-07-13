import React from "react";
import FormCreate from "./Form";
import { Input, Button } from "antd";
import "./styles.css";

function App({ form }) {
  // const value = form.getFieldValue();

  return (
    <div className="App">
      <Input
        {...form.getFieldProps("input1", {
          validator: [
            {
              require: true,
              message: "username is required"
            },
            {
              min: 2,
              max: 20,
              message: "username is 2 - 20"
            }
          ]
        })}
      />
      <div {...form.getFieldErrors("input1")} />
      <Input {...form.getFieldProps("input2")} />
      <Button
        onClick={() => {
          const value = form.getFieldsValue();
          console.log(value);
        }}
      >
        提交
      </Button>
    </div>
  );
}

export default FormCreate()(App);
