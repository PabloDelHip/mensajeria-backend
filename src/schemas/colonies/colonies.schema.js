const mongoose = require('mongoose');

const ColoniesSchema = new mongoose.Schema({
  id: String,
  codigo_postal_asentamiento: String,
  nombre_asentamiento: String,
  tipo_asentamiento: String,
  nombre_municipio: String,
  nombre_estado: String,
  nombre_ciudad: String,
  codigo_postal_oficiona: String,
  clave_estado: String,
  codigo_postal_oficina_: String,
  c_cp_vacio: String,
  clave_tipo_asentamiento: String,
  clave_municipio: String,
  identificador_asentamiento: String,
  clave_interna_cp_ciudad: String,
  lat: String,
  lng: String,
});

mongoose.model('colonies', ColoniesSchema);

module.exports = { ColoniesSchema };
