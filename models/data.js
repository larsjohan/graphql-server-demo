/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('data', {
    page_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(69),
      allowNull: true
    },
    urlslug: {
      type: DataTypes.STRING(71),
      allowNull: true
    },
    id: {
      type: DataTypes.STRING(29),
      allowNull: true
    },
    align: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    eye: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    hair: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    gsm: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    alive: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    appearances: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    firstappearance: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    tableName: 'data'
  });
};
