import React from "react";

export default function FormCreate() {
  return function(WrappedComponent) {
    return class Form extends React.Component {
      form = {
        getFieldProps: () => {
          return { value: "hello" };
        },
        getFieldsValue: () => {
          return { text: 123 };
        }
      };
      render() {
        return <WrappedComponent form={this.form} />;
      }
    };
  };
}
