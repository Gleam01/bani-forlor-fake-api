const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

function generateDiseases() {
  const diseases = [];
  for (let id = 0; id < 100; id++) {
    diseases.push({
      id: uuidv4(),
      name: faker.name.jobTitle(),
    });
  }

  return { diseases };
}

fs.writeFileSync("./database.json", JSON.stringify(generateDiseases()));
