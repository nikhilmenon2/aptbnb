'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    spotId: DataTypes.INTEGER,
    photoURL: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
     Image.belongsTo(models.Spot, { foreignKey: "spot_id" });
  };
  return Image;
};