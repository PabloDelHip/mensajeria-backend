/**
 *
 *
 * @class BranchesController
 */
class BranchesController {
  /**
   * Creates an instance of BranchesController.
   * @param {Object} BranchesService BranchesService
   * @memberof BranchesController
   */
  constructor(BranchesService) {
    this.BranchesService = BranchesService;
  }
  /**
 *
 *create branche
 * @param {Object} args data branche
 * @return {Object} Branche
 * @memberof BranchesController
 */
  async createBranche(args) {
    try {
      return await this.BranchesService.createBranche(args);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * update branche
   * @param {Object} args Data branche
   * @return {Promise} New data branche
   */
  async updateBranche(args) {
    try {
      return await this.BranchesService.updateBranche(args);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * update status to false in branche
   * @param {Object} args id branche
   * @return {Promise} data branche
   */
  async deleteBranche(args) {
    try {
      await this.BranchesService.deleteBranche(args.id);
      return { status: true, message: 'branche removed successfully' };
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
      return await this.BranchesService.findBranchByIdUser(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = BranchesController;
