/**
 * @class PopulationsService
 */
class PopulationsService {
  /**
   * Creates an instance of PopulationsService.
   * @param {*} MunicipalitiesRepository repository municipalities
   * @param {*} StatesRepository repository states
   * @param {*} ColoniesRepository repository colonies
   * @memberof PopulationsService
   */
  constructor(
      MunicipalitiesRepository,
      StatesRepository,
      ColoniesRepository,
  ) {
    this.MunicipalitiesRepository = MunicipalitiesRepository;
    this.StatesRepository = StatesRepository;
    this.ColoniesRepository = ColoniesRepository;
  }
  /**
 *
 *
 * @return {*} return data states
 * @memberof PopulationController
 */
  async getStates() {
    try {
      return await this.StatesRepository.getStates();
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
  async findMunicipalitiesByClaveEntidad({ claveEntidad }) {
    try {
      return await this.MunicipalitiesRepository
          .findMunicipalitiesByClaveEntidad({ clave_entidad: claveEntidad });
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
      return await this.ColoniesRepository
          .findCPByCvMunicipalitieByCvStates(params);
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
      return await this.ColoniesRepository
          .findColoniesByCP(params);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = PopulationsService;
