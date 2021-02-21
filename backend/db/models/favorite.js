'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Favorite.associate = function(models) {
     Favorite.belongsTo(models.User, { foreignKey: "user_id" });
     Favorite.belongsTo(models.Spot, { foreignKey: "spot_id" });
  };
  return Favorite;
};