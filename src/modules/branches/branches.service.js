/**
 *
 *
 * @class BranchesServies
 */
class BranchesServies {
  /**
   * Creates an instance of BranchesServies.
   * @param {branchesRepository} BranchesRepository BranchesRepository
   * @memberof BranchesServies
   */
  constructor(BranchesRepository) {
    this.BranchesRepository = BranchesRepository;
  }
  /**
 *
 *create branche
 * @param {Object} params data branche
 * @return {Object} Branche
 * @memberof BranchesController
 */
  async createBranche(params) {
    try {
      return await this.BranchesRepository.createBranche(params);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * update branche
   * @param {Object} params Data branche
   * @return {Promise} New data branche
   */
  async updateBranche(params) {
    try {
      return await this.BranchesRepository.updateBranche(params);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * update status to false in branche
   * @param {Object} id id branche
   * @return {Promise} data branche
   */
  async deleteBranche(id) {
    try {
      return await this.BranchesRepository.deleteBranche(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * find branche by idUser
   * @param {Object} id id branche
   * @return {Promise} data branches
   */
  async findBranchByIdUser(id) {
    try {
      return await this.BranchesRepository.findBranchByIdUser(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = BranchesServies;
