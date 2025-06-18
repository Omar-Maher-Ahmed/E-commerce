import Joi from "joi";

export const reviewValidation = {
  create: Joi.object({
    productId: Joi.string().hex().length(24).required(),
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().max(500).optional()
  })
};
