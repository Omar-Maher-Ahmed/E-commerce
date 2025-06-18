import Joi from "joi";

export const orderValidation = {
  place: Joi.object({
    shippingAddress: Joi.string().min(5).max(200).optional(),
    couponCode: Joi.string().alphanum().min(3).max(20).optional()}),
  updateStatus: Joi.object({
    status: Joi.string().valid("pending", "processing", "shipped", "delivered", "cancelled").required()
  })
};
