'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Card}) {
      this.hasMany(Card,{foreignKey: 'deck_id'})
    }
  }
  Deck.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};