const validation = (schema) => {
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


const validate = (schema) => {
  return (req, res, next) => {
    const validationResult = schema.body.validate(req.body, { abortEarly: false });
    if (validationResult.error) {
      return res.status(400).json({
        errors: validationResult.error.details.map((err) => err.message),
      });
    }
    next();
  };
};

export default validation;