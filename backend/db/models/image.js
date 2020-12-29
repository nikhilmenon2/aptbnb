'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    spot_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Spot, { foreignKey: 'spot_id' });
  };
  return Image;
};