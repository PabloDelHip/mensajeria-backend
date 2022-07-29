const { Database } = require('../../support');
const { StatesSchema } = require('./states.schema');
/**
 *
 *
 * @return {*} data states
 */
async function getStates() {
  try {
    const statesSchema = Database.getModel('states', StatesSchema);
    return await statesSchema.find({}).sort({ nombre_entidad: 1 });
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { getStates };
