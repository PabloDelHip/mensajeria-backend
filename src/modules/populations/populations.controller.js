/**
 *
 *
 * @class PopulationController
 */
class PopulationController {
  /**
   * Creates an instance of PopulationController.
   * @param {*} PopulationService population service
   * @memberof PopulationController
   */
  constructor(PopulationService) {
    this.PopulationService = PopulationService;
  }
  /**
 *
 *
 * @return {*} return data states
 * @memberof PopulationController
 */
  async getStates() {
    try {
      return await this.PopulationService.getStates();
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
 *
 *
 * @param {*} params params fin municipalitie
 * @return {*} return data municipalitie
 * @memberof PopulationController
 */
  async findMunicipalitiesByClaveEntidad(params) {
    try {
      return await this.PopulationService.findMunicipalitiesByClaveEntidad(params);
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
 *
 *
 * @param {*} params params id state and id municipalitie
 * @return {*} return data CP
 * @memberof PopulationController
 */
  async findCPByCvMunicipalitieByCvStates(params) {
    try {
      return await this.PopulationService.findCPByCvMunicipalitieByCvStates(params);
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
 *
 *
 * @param {*} params cp
 * @return {*} return data colonies
 * @memberof PopulationController
 */
  async findColoniesByCP(params) {
    try {
      return await this.PopulationService.findColoniesByCP(params);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = PopulationController;
