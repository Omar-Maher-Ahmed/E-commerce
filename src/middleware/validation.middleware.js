export const validation = (schema) => {
  return (req, res, next) => {
    const validationResult = schema.body?.validate(req.body);
    if (validationResult?.error) {
      return res.status(400).json({
        message: "Validation error",
        error: validationResult.error.details[0].message,
      });
    }
    next();
  };
};
