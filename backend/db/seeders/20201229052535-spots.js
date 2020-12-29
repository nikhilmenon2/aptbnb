'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
       { user_id: 1, 
        name: 'The HighLands Manor',
         description: 'Commandingly sited high in the iconic Four Seasons Hotel, this 4BD, 4,550sf major view condominium boasts a large living room, open kitchen & family room, paneled office & view dining room. Oversized windows on three sides deliver captivating views of the sunrise over the San Francisco Bay, the dynamic Downtown skyline & sunset views toward City Hall & Twin Peaks. Extensively renovated under the leadership of designer Jacques Saint Dizier & Muratore Construction, the substantial layout & elegantly proportioned rooms enable daily living & sophisticated entertaining. Whole-house infrastructure incl. advanced Lutron lighting & shading and media/entertainment systems. Larger than most single-family homes, Four Seasons #34A is the largest constructed condominium available for sale downtown. Five-Star Four Seasons Hotel & Residences amenities incl. concierge & doorman, 24/7 in-room dining, housekeeping, spa, two restaurants, security, business center & onsite 127,000sf fitness center.', 
         latitude: 37.7863598, 
         longitude: -122.4041629, 
         street: '765 Market St Unit 34A', 
         city: 'San Francisco', 
         state: 'CA', 
         zipcode: 94103, 
         price: 833, 
         occupancy: 10, 
         createdAt: new Date(),
         updatedAt: new Date()
          },
      { user_id: 3,
         name: 'Kensington Estate', 
         description: 'Generous luxury finishes. Spacious open floor plan living and dining area. 2 balconies with water views. Chefs kitchen includes Gaggenau oven and cooktop, Caesarstone quartz countertops, island. Grand master bedroom with Bay Bridge views, en-suite bathroom, and large master closet with custom built-ins. 2 additional full bathrooms with stall showers. Wide plank hardwood flooring in living areas and bedrooms. Air conditioning and heating. Pre-wired for high speed internet service. Nest thermostat. Washer and dryer in unit. 2-car parking available for additional fee. Also available furnished; inquire for details Building Features: 24-hour concierge -designed 7,000 sq. ft. state-of-the-art fitness center with rock-climbing wall 70-foot swimming pool Dry sauna and changing rooms Bi-level owners club lounge Indoor screening room with theater-style seating Private dining room and chefs demonstration kitchen Business center with 2 mtg room', 
         latitude: 37.7888979, 
         longitude: -122.3914231, 
         street: '338 Main St Unit 37A',
          city: 'San Francisco', 
          state: 'CA', 
          zipcode: 94105, 
          price: 672, 
          occupancy: 8, 
          createdAt: new Date(),
          updatedAt: new Date()
          },

       {user_id: 3, 
        name: 'Drake Estates', 
        description: 'Embrace the best of San Francisco from the comfort of your luxury apartment at 399 Fremont. Take advantage of convenient on-site amenities including a world-class fitness center with yoga and spin studios, lap pool with cabana lounge, catering kitchen with private wine storage, and onsite parking. Now offering furnished and unfurnished apartments, these San Francisco apartments feature quartz countertops, stainless steel Bosch appliances, walnut flooring, and walk-in closets. This 42-story tower is above it all, only steps from the hip eateries, galleries, premier shopping, and prime work centers of San Francisco. Come see these upscale Rincon Hill apartments for yourself. We are currently offering self-guided tours and virtual appointments. These units are rental units subject to the San Francisco Rent Ordinance, which limits evictions without just cause, and which states that any waiver by a tenant of their rights under the Rent Ordinance is void as contrary to public policy.',
         latitude: 37.7877399, 
         longitude: -122.3925385, 
         street: '399 Fremont  St',
          city: 'San Francisco', 
          state: 'CA', 
          zipcode: 94105, 
          price: 416, 
          occupancy: 6, 
          createdAt: new Date(),
          updatedAt: new Date()
           },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Spots', null, {});

  }
};
