/**
 * @class LocationsService
 */
class LocationsService {
  /**
   * Repositories
   * @Injectable
   * @param {Object} LocationsRepository Locations repository
   */
  constructor(LocationsRepository) {
    this.LocationsRepository = LocationsRepository;
  }
  /**
 *
 *
 * @param {*} params params location
 * @param {*} userId user id
 * @return {*} return data location
 * @memberof LocationsService
 */
  async createLocation(params, userId) {
    try {
      return await this.LocationsRepository.createLocation(params, userId);
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
 *
 *
 * @param {*} params params location
 * @return {*} return data location
 * @memberof LocationsService
 */
  async updateLocation(params) {
    try {
      return await this.LocationsRepository.updateLocation(params);
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
 *
 *
 * @param {*} params params location
 * @param {*} userId user id
 * @return {*} return data location
 * @memberof LocationsService
 */
  async removeLocation(params, userId) {
    try {
      return await this.LocationsRepository.removeLocation(params, userId);
    } catch (error) {
      throw new Error(error);
    }
  }


  /**
   * Set As Default
   * @param {*} params params location
   * @param {*} userId user id
   * @return {*} return message
   * @memberof LocationController
   */
  async setAsDefault({ id }, userId) {
    try {
      const locationActive = await this.LocationsRepository.findLocationDefaultActive(userId);
      console.log('activo', locationActive);
      let paramsUpdate = {};
      if (locationActive) {
        paramsUpdate = {
          id: locationActive,
          default: false,
        };
        await this.LocationsRepository.updateLocation(paramsUpdate);
      }
      paramsUpdate.id = id;
      paramsUpdate.default = true;
      await this.LocationsRepository.updateLocation(paramsUpdate);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = LocationsService;
