/**
 *
 *
 * @class LocationController
 */
class LocationController {
  /**
   * Creates an instance of LocationController.
   * @param {Object} LocationsService locations service
   * @memberof LocationController
   */
  constructor(LocationsService) {
    this.LocationsService = LocationsService;
  }
  /**
 * Create Location
 * @param {*} params params locations
 * @param {*} { user_id } user id
 * @return {*} return data location
 * @memberof LocationController
 */
  async createLocation(params, { user_id }) {
    try {
      return await this.LocationsService.createLocation(params, user_id);
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
 * Update Location
 * @param {*} params params location
 * @return {*} return data location
 * @memberof LocationController
 */
  async updateLocation(params) {
    try {
      return await this.LocationsService.updateLocation(params);
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
 * Remove Location
 * @param {*} params params location
 * @param {*} { user_id } user id
 * @return {*} return message
 * @memberof LocationController
 */
  async removeLocation(params, { user_id }) {
    try {
      await this.LocationsService.removeLocation(params, user_id);
      return { status: true, message: 'location removed successfully' };
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
 * Set As Default
 * @param {*} params params location
 * @param {*} { user_id } user id
 * @return {*} return message
 * @memberof LocationController
 */
  async setAsDefault(params, { user_id }) {
    try {
      await this.LocationsService.setAsDefault(params, user_id);
      return { status: true, message: 'location active successfully' };
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = LocationController;
