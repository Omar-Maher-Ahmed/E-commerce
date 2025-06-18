import Review from "../models/review.model.js";

export const createReview = async (req, res) => {
  const { productId, rating, comment } = req.body;

  const review = new Review({
    userId: req.user._id,
    productId,
    rating,
    comment
  });

  await review.save();
  res.status(201).json(review);
};

export const getProductReviews = async (req, res) => {
  const { productId } = req.params;
  const reviews = await Review.find({ productId }).populate("userId", "name");
  res.status(200).json(reviews);
};
