import Joi from 'joi';

export const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export const orderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).min(1).required(),
});
