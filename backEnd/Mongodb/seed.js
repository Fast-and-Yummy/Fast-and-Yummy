const { db } = require("./index");
const Food = require("./Food.js");

const sampleData = require("../data.json");

const insertSampleFoods = function () {
  Food.create(sampleData)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertSampleFoods();