import Joi from "joi";

export const couponValidation = {
  create: Joi.object({
    code: Joi.string().alphanum().min(3).max(20).required(),
    discount: Joi.number().min(1).max(100).required(),
    expiresAt: Joi.date().greater("now").required()
  }),
  update: Joi.object({
    code: Joi.string().alphanum().min(3).max(20).optional(),
    discount: Joi.number().min(1).max(100).optional(),
    expiresAt: Joi.date().greater("now").optional()
  })
};
