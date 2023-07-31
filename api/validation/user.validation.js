import Joi from "joi";

export default Joi.object().keys({
  name: Joi.string().max(50).required().label("Name"),
  surname: Joi.string().max(50).required().label("Surname"),
  email: Joi.string().email().required().label("Email"),
  password: Joi.string()
    .regex(
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/
    )
    .required()
    .label("Password"),
});
