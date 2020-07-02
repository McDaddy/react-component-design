const AsyncValidator = require("async-validator").default;

const descriptor = {
  username: [
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
};

const validator = new AsyncValidator(descriptor);

const data = {
  username: "1"
};

validator
  .validate(data)
  .then(() => {
    console.log("pass");
  })
  .catch(errors => {
    console.log(errors);
  });
