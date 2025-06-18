import Coupon from "../../../../DB/model/coupon.model.js";

export const createCoupon = async (req, res) => {
  const { code, discount, expiresAt } = req.body;
  const exists = await Coupon.findOne({ code });
  if (exists) return res.status(400).json({ message: "Coupon already exists" });

  const coupon = new Coupon({ code, discount, expiresAt });
  await coupon.save();
  res.status(201).json(coupon);
};

export const getCoupons = async (req, res) => {
  const coupons = await Coupon.find();
  res.status(200).json(coupons);
};

export const updateCoupon = async (req, res) => {
  const { id } = req.params;
  const updated = await Coupon.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(updated);
};

export const deleteCoupon = async (req, res) => {
  const { id } = req.params;
  await Coupon.findByIdAndDelete(id);
  res.status(204).send();
};
