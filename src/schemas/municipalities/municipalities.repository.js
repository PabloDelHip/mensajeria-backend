const { Database } = require('../../support');
const { MunicipalitiesSchema } = require('./municipalities.schema');
/**
 *
 *
 * @param {*} params params filter
 * @return {*} return data municipalities
 */
async function findMunicipalitiesByClaveEntidad(params) {
  try {
    const criteria = {
      nombre_municipio: { $ne: 'todo el estado' },
      ...params,
    };
    const municipalitiesSchema = Database.getModel('municipalities', MunicipalitiesSchema);
    return await municipalitiesSchema
        .find(criteria)
        .sort({ nombre_municipio: 1 });
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { findMunicipalitiesByClaveEntidad };
