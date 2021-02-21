'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Spots", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(1000),
      },
      description: {
        type: Sequelize.STRING(1000),
      },
      overview: {
        type: Sequelize.STRING(1000),
      },
      rules: {
        type: Sequelize.STRING(1000),
      },
      imageURL: {
        type: Sequelize.STRING(1000),
      },
      neighborhood: {
        type: Sequelize.STRING(1000),
      },
      long: {
        type: Sequelize.NUMERIC,
      },
      lat: {
        type: Sequelize.NUMERIC,
      },
      street: {
        type: Sequelize.STRING(1000),
      },
      city: {
        type: Sequelize.STRING(1000),
      },
      state: {
        type: Sequelize.STRING,
      },
      zipcode: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.NUMERIC,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      amenity: {
        type: Sequelize.STRING(1000),
      },
      bedroom: {
        type: Sequelize.INTEGER,
      },
      bathroom: {
        type: Sequelize.INTEGER,
      },
      accomadate: {
        type: Sequelize.INTEGER,
      },
      bed: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};