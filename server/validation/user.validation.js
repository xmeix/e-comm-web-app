import Joi from "joi";

export const RegisterationValidation = Joi.object().keys({
  name: Joi.string().min(3).max(100).required().label("name"),
  // phoneNumber: Joi.string()
  //   .regex(/^(0)(5|6|7)[0-9]{8}$/)
  //   .required()
  //   .label("PhoneNumber"),
  email: Joi.string().email().required().label("email"),
  // address: Joi.object({
  //   street: Joi.string(),
  //   city: Joi.string(),
  //   zipCode: Joi.string().pattern(/^\d{5}$/),
  // }),
  password: Joi.string()
    .regex(
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/
    )
    .required()
    .label("password"),
});
export const PasswordValidation = Joi.object().keys({
  password: Joi.string()
    .regex(
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/
    )
    .required()
    .label("password"),
});

export const LoginValidation = Joi.object().keys({
  email: Joi.string().email().required().label("email"),
  password: Joi.string()
    .regex(
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/
    )
    .required()
    .label("password"),
});
