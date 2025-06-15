import Joi from "joi";

export const createSubcategoryValidation = {
  body: Joi.object({
    name: Joi.string().pattern(/^[a-zA-Z\s]{2,30}$/).required().messages({
        "string.pattern.base": "Name must contain only letters and spaces.",
        "string.empty": "Name is required.",
        "any.required": "Name is required.",
      }),
    categoryId: Joi.string().length(24).required().messages({
        "string.length": "Category ID must be a valid 24-character ObjectId.",
        "any.required": "Category ID is required.",
      }),
  }),
};