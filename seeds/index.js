const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedPost = require('./postData');
const seedComment = require('./commentData');

const seed = async () => {
  try {
    await sequelize.sync({ force: true });

    await seedUser();
    await seedPost();
    await seedComment();

    console.log("Seeded Database!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seed();
