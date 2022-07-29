const { Database } = require('../../support');
const { BranchesSchema } = require('./branches.schema');

/**
   * create branche
   * @param {Object} params Data branche
   * @return {Promise} New branche
   */
async function createBranche(params) {
  try {
    const branchesSchema = Database.getModel('branches', BranchesSchema);
    return await branchesSchema.create(params);
  } catch (error) {
    throw new Error(error);
  }
}

/**
   * update branche
   * @param {Object} params Data branche
   * @return {Promise} New data branche
   */
async function updateBranche(params) {
  try {
    const dataBranche = { ...params };
    delete dataBranche.id;
    const branchesSchema = Database.getModel('branches', BranchesSchema);
    return await branchesSchema.findOneAndUpdate(
        { _id: params.id },
        dataBranche,
        { new: true },
    );
  } catch (error) {
    throw new Error(error);
  }
}

/**
   * update status to false in branche
   * @param {Object} id id branche
   * @return {Promise} data branche
   */
async function deleteBranche(id) {
  try {
    const branchesSchema = Database.getModel('branches', BranchesSchema);
    return await branchesSchema.findOneAndUpdate(
        { _id: id },
        { status: false },
    );
  } catch (error) {
    throw new Error(error);
  }
}

/**
   * find branche by idUser
   * @param {Object} id id branche
   * @return {Promise} data branches
   */
async function findBranchByIdUser(id) {
  try {
    const branchesSchema = Database.getModel('branches', BranchesSchema);
    return await branchesSchema.find({ user: id });
  } catch (error) {
    throw new Error(error);
  }
}


module.exports = {
  createBranche,
  updateBranche,
  deleteBranche,
  findBranchByIdUser,
};
