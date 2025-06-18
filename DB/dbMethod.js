export const getAll = async (Model, query = {}, projection = null, options = {}) => {
  return await Model.find(query, projection, options);
};

export const getById = async (Model, id) => {
  return await Model.findById(id);
};

export const createOne = async (Model, data) => {
  return await Model.create(data);
};

export const updateOne = async (Model, id, data) => {
  return await Model.findByIdAndUpdate(id, data, { new: true });
};

export const deleteOne = async (Model, id) => {
  return await Model.findByIdAndDelete(id);
};
