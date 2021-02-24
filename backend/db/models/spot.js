"use strict";
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define(
    "Spot",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      overview: DataTypes.STRING,
      rules: DataTypes.STRING,
      imageURL: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      long: DataTypes.NUMERIC,
      lat: DataTypes.NUMERIC,
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipcode: DataTypes.INTEGER,
      price: DataTypes.NUMERIC,
      userId: DataTypes.INTEGER,
      amenity: DataTypes.STRING,
      bedroom: DataTypes.INTEGER,
      bathroom: DataTypes.INTEGER,
      accomadate: DataTypes.INTEGER,
      bed: DataTypes.INTEGER,
    },
    {}
  );
  Spot.associate = function (models) {
    Spot.hasMany(models.Booking, { foreignKey: "spotId" });
    Spot.belongsTo(models.User, { foreignKey: "userId" });
    Spot.hasMany(models.Image, { foreignKey: "spotId" });
    Spot.hasMany(models.Review, { foreignKey: "spotId" });
    Spot.hasMany(models.Favorite, { foreignKey: "spotId" });
  };
  return Spot;
};
