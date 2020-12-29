'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('Images', [
        {spot_id: 1, image_url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/787/490787_4.jpg', createdAt: new Date(), updatedAt: new Date() },
        {spot_id: 1, image_url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/787/490787_2_4.jpg', createdAt: new Date(), updatedAt: new Date() },
        {spot_id: 1, image_url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/787/490787_5_4.jpg', createdAt: new Date(), updatedAt: new Date() },
        {spot_id: 2, image_url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/760/498760_2.jpg', createdAt: new Date(), updatedAt: new Date() },
        {spot_id: 2, image_url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/760/498760_1_2.jpg', createdAt: new Date(), updatedAt: new Date() },
        {spot_id: 2, image_url: 'https://ssl.cdn-redfin.com/photo/9/bigphoto/760/498760_4_2.jpg', createdAt: new Date(), updatedAt: new Date() },
        {spot_id: 3, image_url: 'https://ssl.cdn-redfin.com/photo/8/bigphoto/933/ML81815933_6.jpg', createdAt: new Date(), updatedAt: new Date() },
        {spot_id: 3, image_url: 'https://ssl.cdn-redfin.com/photo/8/bigphoto/933/ML81815933_1_6.jpg', createdAt: new Date(), updatedAt: new Date() },
        {spot_id: 3, image_url: 'https://ssl.cdn-redfin.com/photo/8/bigphoto/933/ML81815933_4_6.jpg', createdAt: new Date(), updatedAt: new Date() },
      
      
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Images', null, {});
  }
};
