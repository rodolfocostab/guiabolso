'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  Componente: {
    type: String,
    required: 'Entre com nome do Deploy'
  },
  Versao: {
    type: String,
    required: 'Versao do componente'
  },
  Responsavel: {
    type: String,
    required: 'Nome do responsavel'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['iniciado', 'processando', 'completo']
    }],
    default: ['iniciado']
  }
});

module.exports = mongoose.model('Deploy', TaskSchema);
