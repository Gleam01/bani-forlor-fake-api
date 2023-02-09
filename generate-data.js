const { faker } = require("@faker-js/faker");
const fs = require("fs");

function generateData() {
  const adresses = [];
  for (let i = 0; i < 10; i++) {
    adresses.push({
      id: faker.datatype.uuid(),
      country: faker.address.country(),
      countryCode: faker.address.countryCode(),
      regions: faker.address.state(),
      city: faker.address.cityName(),
      building: faker.address.buildingNumber(),
      street: faker.address.streetName(),
      postalCode: faker.address.zipCode(),
      district: faker.address.secondaryAddress(),
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const hospitals = [];
  for (let i = 0; i < 10; i++) {
    hospitals.push({
      id: faker.datatype.uuid(),
      name: faker.name.jobArea(),
      ifu: faker.random.numeric(10),
      phone: faker.phone.number("+229 ## ## ## ##"),
      authorizationNumber: i % 2 === 0 ? null : faker.random.alphaNumeric(100),
      adressId: adresses[i].id,
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const services = [];
  for (let i = 0; i < 10; i++) {
    services.push({
      id: faker.datatype.uuid(),
      name: faker.name.jobArea(),
      hospitalId: hospitals[i].id,
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const patients = [];
  for (let i = 0; i < 100; i++) {
    patients.push({
      id: faker.datatype.uuid(),
      lastName: faker.name.lastName(),
      firstName: faker.name.firstName(),
      birthDate: faker.date.birthdate(),
      gender: i % 2 == 0 ? "Masculin" : "Féminin",
      age: faker.datatype.number({ min: 18, max: 100 }),
      fullName: faker.name.fullName(),
      phone: faker.phone.number("+229 ## ## ## ##"),
      ravip: faker.random.numeric(10),
      email: faker.internet.email(),
      password: "password",
      adressId: adresses[Math.floor(i / 10)].id,
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const patients_hospitals = [];
  for (let i = 0; i < 100; i++) {
    patients_hospitals.push({
      id: faker.datatype.uuid(),
      patientId: patients[Math.floor(i)].id,
      hospitalId: hospitals[Math.floor(i / 10)].id,
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const nurses = [];
  for (let i = 0; i < 100; i++) {
    nurses.push({
      id: faker.datatype.uuid(),
      lastName: faker.name.lastName(),
      firstName: faker.name.firstName(),
      birthDate: faker.date.birthdate(),
      gender: i % 2 == 0 ? "Masculin" : "Féminin",
      age: faker.datatype.number({ min: 18, max: 100 }),
      fullName: faker.name.fullName(),
      phone: faker.phone.number("+229 ## ## ## ##"),
      ravip: faker.random.numeric(10),
      diplomaTitle: faker.name.jobTitle(),
      yearsExperience: faker.datatype.number({ min: 1, max: 30 }),
      hiringDate: faker.date.recent(),
      isAuthorizedToExerciseInPrivateClientele: faker.datatype.boolean(),
      identificationCardNumber: faker.random.numeric(8),
      serviceId: services[Math.floor(i / 10)].id,
      email: faker.internet.email(),
      password: "password",
      adressId: adresses[Math.floor(i / 10)].id,
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const nurses_hospitals = [];
  for (let i = 0; i < 100; i++) {
    nurses_hospitals.push({
      id: faker.datatype.uuid(),
      nurseId: nurses[Math.floor(i)].id,
      hospitalId: hospitals[Math.floor(i / 10)].id,
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const patient_nurses = [];
  for (let i = 0; i < 300; i++) {
    patient_nurses.push({
      id: faker.datatype.uuid(),
      nurseId: nurses[Math.floor(i / 3)].id,
      patientId: patients[Math.floor(i / 3)].id,
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const specialties = [];
  for (let i = 0; i < 10; i++) {
    specialties.push({
      id: faker.datatype.uuid(),
      name: faker.name.jobArea(),
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const doctors = [];
  for (let i = 0; i < 100; i++) {
    doctors.push({
      id: faker.datatype.uuid(),
      lastName: faker.name.lastName(),
      firstName: faker.name.firstName(),
      birthDate: faker.date.birthdate(),
      gender: i % 2 == 0 ? "Masculin" : "Féminin",
      age: faker.datatype.number({ min: 18, max: 100 }),
      fullName: faker.name.fullName(),
      phone: faker.phone.number("+229 ## ## ## ##"),
      ravip: faker.random.numeric(10),
      diplomaTitle: faker.name.jobTitle(),
      yearsExperience: faker.datatype.number({ min: 1, max: 30 }),
      hiringDate: faker.date.recent(),
      isAuthorizedToExerciseInPrivateClientele: faker.datatype.boolean(),
      identificationCardNumber: faker.random.numeric(8),
      serviceId: services[Math.floor(i / 10)].id,
      email: faker.internet.email(),
      password: "password",
      adressId: adresses[Math.floor(i / 10)].id,
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const doctors_hospitals = [];
  for (let i = 0; i < 100; i++) {
    doctors_hospitals.push({
      id: faker.datatype.uuid(),
      doctorId: doctors[Math.floor(i)].id,
      hospitalId: hospitals[Math.floor(i / 10)].id,
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const doctors_specialties = [];
  for (let i = 0; i < 100; i++) {
    doctors_specialties.push({
      id: faker.datatype.uuid(),
      doctorId: doctors[Math.floor(i / 10)].id,
      specialtyId: specialties[Math.floor(i / 10)].id,
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const patient_doctors = [];
  for (let i = 0; i < 300; i++) {
    patient_doctors.push({
      id: faker.datatype.uuid(),
      doctorId: doctors[Math.floor(i / 3)].id,
      patientId: patients[Math.floor(i / 3)].id,
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const diseases = [];
  for (let i = 0; i < 100; i++) {
    diseases.push({
      id: faker.datatype.uuid(),
      name: faker.name.jobTitle(),
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  return {
    adresses,
    hospitals,
    services,
    patients,
    patients_hospitals,
    nurses,
    nurses_hospitals,
    specialties,
    doctors,
    doctors_hospitals,
    doctors_specialties,
    patient_nurses,
    patient_doctors,
    diseases,
  };
}

fs.writeFileSync("./database.json", JSON.stringify(generateData()));
