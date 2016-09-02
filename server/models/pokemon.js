const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name:{type:String, required:true},
  number:{type:Number, required:true},
  image:{type:String},
  types: [String]
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);
module.exports =Pokemon;