const { faker } = require("@faker-js/faker");
const fs = require("fs");

function generateDiseases() {
  const diseases = [];
  for (let id = 0; id < 100; id++) {
    diseases.push({
      id: faker.datatype.uuid(),
      name: faker.name.jobTitle(),
    });
  }

  return { diseases };
}

fs.writeFileSync("./database.json", JSON.stringify(generateDiseases()));
