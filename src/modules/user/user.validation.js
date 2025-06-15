import Joi from 'joi';

export const registerValidation = {
  body: Joi.object({
    name: Joi.string().pattern(/^[A-Za-z ]+$/).min(3).max(30).required().messages({
        "string.pattern.base": "Name must contain only letters and spaces",
        "any.required": "Name is required",
      }),
    email: Joi.string().email().required().messages({
        "string.email": "Please enter a valid email",
        "any.required": "Email is required",
      }),
    password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/).required().messages({ 
        "string.pattern.base":"Password must be at least 8 characters and include uppercase, lowercase and a number",
        "any.required": "Password is required",
      }),
  }),
};

export const loginValidation = {
  body: Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "Please enter a valid email",
        "any.required": "Email is required",
      }),
    password: Joi.string().required().messages({
        "any.required": "Password is required",
      }),
  }),
};
