import Joi from "joi";

export const createCategoryValidation = {
  body: Joi.object({
    name: Joi.string().pattern(/^[a-zA-Z\s]{2,30}$/).required().messages({
        "string.pattern.base": "Name must contain only letters and spaces.",
        "string.empty": "Name is required.",
        "any.required": "Name is required.",
      }),
  }),
};


