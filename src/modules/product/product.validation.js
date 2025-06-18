import Joi from "joi";

export const productValidation = {
  body: Joi.object({
    name: Joi.string().min(2).required(),
    description: Joi.string().optional(),
    price: Joi.number().positive().required(),
    quantity: Joi.number().min(0).default(0),
    categoryId: Joi.string().length(24).required(),
    subcategoryId: Joi.string().length(24).optional(),
  }),
};
