const { Database } = require('../../support');
const { ColoniesSchema } = require('./colonies.schema');
/**
 *
 *
 * @param {*} { claveMunicipio, claveEstado } clave municipio and clave estado
 * @return {*} list CP
 */
async function findCPByCvMunicipalitieByCvStates({ claveMunicipio, claveEstado }) {
  try {
    const coloniesSchema = Database.getModel('colonies', ColoniesSchema);
    return await coloniesSchema.aggregate([
      {
        $match:
        {
          $and: [
            { clave_municipio: claveMunicipio },
            { clave_estado: claveEstado },
          ],
        },
      },
      { $group: { _id: '$codigo_postal_asentamiento' } },
      { $project: { cp: '$_id', _id: 0 } },
      { $sort: { cp: 1 } },
    ]);
  } catch (error) {
    throw new Error(error);
  }
}
/**
 *
 *
 * @param {*} { cp } cp
 * @return {*} list colonies
 */
async function findColoniesByCP({ cp }) {
  try {
    const coloniesSchema = Database.getModel('colonies', ColoniesSchema);
    return await coloniesSchema.find({ codigo_postal_asentamiento: cp }).sort({ nombre_asentamiento: 1 });
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  findCPByCvMunicipalitieByCvStates,
  findColoniesByCP,
};
