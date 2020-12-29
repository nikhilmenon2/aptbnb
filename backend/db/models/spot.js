'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    longitude: DataTypes.NUMERIC,
    latitude: DataTypes.NUMERIC,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    price: DataTypes.NUMERIC,
    occupancy: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.hasMany(models.Booking, { foreignKey: 'spot_id' });
    Spot.belongsTo(models.User, { foreignKey: 'user_id' });
    Spot.hasMany(models.Image, { foreignKey: 'spot_id' })

  };
  return Spot;
};