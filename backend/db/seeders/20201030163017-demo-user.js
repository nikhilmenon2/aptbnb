"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Demo",
          email: "demo@aa.io",
          hashedPassword: bcrypt.hashSync("password"),
          firstName: "Demo",
          lastName: "User",
          profileImg:
            "https://images.generated.photos/qNwRFWNSN3FVMRBTzI4s_q5cpxkkhkix9Q-EipSRoPc/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NzM5NDYuanBn.jpg",
        },
        {
          username: "Demo1",
          email: "demo1@aa.io",
          hashedPassword: bcrypt.hashSync("password"),
          firstName: "Ryan",
          lastName: "Wellington",
          profileImg:
            "https://images.generated.photos/wJ17Fkghd7To0OWuqoIczIiguTaMa1M634kr9E4veiI/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMjAxNzcuanBn.jpg",
        },
        {
          username: "Demo2",
          email: "demo2@aa.io",
          hashedPassword: bcrypt.hashSync("password"),
          firstName: "Jackie",
          lastName: "Wade",
          profileImg:
            "https://images.generated.photos/jO38FEIfMHn0Akh2CT6SXcna-uRNOtQAFa9PRiUToG4/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5MjU1MTIuanBn.jpg",
        },
        {
          username: "Demo3",
          email: "demo3@aa.io",
          hashedPassword: bcrypt.hashSync("password"),
          firstName: "Raj",
          lastName: "Kumar",
          profileImg:
            "https://images.generated.photos/jrKRLtnvZZUZskO0qqX8bABCRMPD7Cp5rWJuxfSOo7Y/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5OTc4NDUuanBn.jpg",
        },
        {
          username: "Demo4",
          email: "demo4@aa.io",
          hashedPassword: bcrypt.hashSync("password"),
          firstName: "Rishia",
          lastName: "Crowe",
          profileImg:
            "https://images.generated.photos/5CLeaeMFH5ebkXgGWi-lVNbnVNlHVxynsirxT4GljME/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0MzM3MTkuanBn.jpg",
        },

        {
          username: "Demo5",
          email: "demo5@aa.io",
          hashedPassword: bcrypt.hashSync("password"),
          firstName: "Bethany",
          lastName: "Woods",
          profileImg:
            "https://images.generated.photos/0IMOH9ou8FFhZO13vthSDLRVOktCdeys0opP3fJo4Hs/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0Mzc4NDAuanBn.jpg",
        },
        {
          username: "Demo6",
          email: "demo6@aa.io",
          hashedPassword: bcrypt.hashSync("password"),
          firstName: "Daniel",
          lastName: "Cliffe",
          profileImg:
            "https://images.generated.photos/rN2ygnRNFLFo06uHfz5IXzqONJlXYKVD8gT1eCy6L78/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNDE0MzIuanBn.jpg",
        },
        {
          username: "Demo7",
          email: "demo7@aa.io",
          hashedPassword: bcrypt.hashSync("password"),
          firstName: "Karishma",
          lastName: "Ramano",
          profileImg:
            "https://images.generated.photos/6QmDMgrbxH_oalMczk1RsTttd3CoWcTONlsfdey56aU/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNjQzNjEuanBn.jpg",
        },
        {
          username: "Demo8",
          email: "demo8@aa.io",
          hashedPassword: "password",
          firstName: "Jim",
          lastName: "Caringo",
          profileImg:
            "https://images.generated.photos/tto6p603fPilklNh-rhUjlc3YW4OJXhE6IDD8nH2048/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1MjIwMDMuanBn.jpg",
        },
        {
          username: "Demo9",
          email: "demo9@aa.io",
          hashedPassword: "password",
          firstName: "Robert",
          lastName: "Dawson",
          profileImg:
            "https://images.generated.photos/3tQ6Nv-_MuhLX0hAt7jNe63_4KFBCqcaHkXstcQwu6c/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyMjM2MzMuanBn.jpg",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
     null,
      {}
    );
  },
};
