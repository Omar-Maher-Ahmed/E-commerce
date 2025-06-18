import Joi from "joi";

const reviewValidation = Joi.object({
  productId: Joi.string().required().messages({
    'any.required': 'Product ID is required',
    'string.empty': 'Product ID cannot be empty',
  }),
  rating: Joi.number().min(1).max(5).required().messages({
    'any.required': 'Rating is required',
    'number.base': 'Rating must be a number',
    'number.min': 'Rating must be at least 1',
    'number.max': 'Rating must be at most 5',
  }),
  comment: Joi.string().allow('', null).max(500).messages({
    'string.max': 'Comment must be at most 500 characters',
  }),
});

export { reviewValidation };