import React from "react";
import AsyncValidator from "async-validator";

export default function FormCreate() {
  const store = {};
  return function(WrappedComponent) {
    return class Form extends React.Component {
      form = {
        getFieldProps: (fieldKey, options) => {
          return {
            key: fieldKey,
            onInput: e => {
              const value = e.target.value;
              store[fieldKey] = store[fieldKey] || {};
              store[fieldKey].value = value;
              if (options && options.validator) {
                const validator = new AsyncValidator({
                  [fieldKey]: options.validator
                });
                validator
                  .validate({ [fieldKey]: value })
                  .then(() => {
                    store[fieldKey].error = null;
                  })
                  .catch(({ errors }) => {
                    store[fieldKey].error = errors
                      .map(e => e.message)
                      .join(",");
                  })
                  .then(() => this.forceUpdate());
              }
            }
          };
        },
        getFieldsValue: () => {
          const result = Object.keys(store).reduce((acc, item) => {
            acc[item] = store[item].value;
            return acc;
          }, {});
          return result;
        },
        getFieldErrors: fieldKey => {
          const error = store[fieldKey] && store[fieldKey].error;
          return {
            children: error
          };
        }
      };
      render() {
        return <WrappedComponent form={this.form} />;
      }
    };
  };
}
