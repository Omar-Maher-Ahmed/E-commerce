import Joi from "joi";

export const brandValidation = {
  create: Joi.object({
    name: Joi.string().min(2).max(50).required(),
    logo: Joi.string().uri().optional()
  }),
  update: Joi.object({
    name: Joi.string().min(2).max(50).optional(),
    logo: Joi.string().uri().optional()
  })
};
