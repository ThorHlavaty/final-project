'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Section.hasMany(models.Table)
      Section.belongsTo(models.User)
    }
  };
  Section.init({
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Section',
  });
  return Section;
};