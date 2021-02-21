'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    overall: DataTypes.INTEGER,
    review: DataTypes.STRING,
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
     Review.belongsTo(models.User, { foreignKey: "user_id" });
     Review.belongsTo(models.Spot, { foreignKey: "spot_id" });
  };
  return Review;
};

