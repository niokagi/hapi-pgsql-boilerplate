import Joi from "joi";

export const UserPayloadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(6).required(),
  fullname: Joi.string().required(),
});
