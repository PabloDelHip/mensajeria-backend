const mongoose = require('mongoose');

const MunicipalitiesSchema = new mongoose.Schema({
  id: String,
  clave_entidad: String,
  nombre_entidad: String,
  clave_municipio: String,
  nombre_municipio: String,
  clave_inegi: String,
  nombre_inegi: String,
  minx: String,
  miny: String,
  maxx: String,
  maxy: String,
  lat: String,
  lng: String,
});

mongoose.model('municipalities', MunicipalitiesSchema);

module.exports = { MunicipalitiesSchema };
