const { faker } = require("@faker-js/faker");
const fs = require("fs");
const slugify = require('slugify');

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

  const definedRoles = ["Patient", "Docteur", "Infirmier", "Agent médico-technique", "Administrateur", "Responsable d'hôpital"];
  const roles = [];
  for (let i = 0; i < 6; i++) {
    roles.push({
      id: faker.datatype.uuid(),
      name: definedRoles[i],
      slug: slugify(definedRoles[i], {
        replacement: "-", // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true, // convert to lower case, defaults to `false`
        strict: true, // strip special characters except replacement, defaults to `false`
        locale: "vi", // language code of the locale to use
        trim: true, // trim leading and trailing replacement chars, defaults to `true`
      }),
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
      roleId: roles[0],
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const patient_hospital = [];
  for (let i = 0; i < 100; i++) {
    patient_hospital.push({
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
      roleId: roles[2],
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const nurse_hospital = [];
  for (let i = 0; i < 100; i++) {
    nurse_hospital.push({
      id: faker.datatype.uuid(),
      nurseId: nurses[Math.floor(i)].id,
      hospitalId: hospitals[Math.floor(i / 10)].id,
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const patient_nurse = [];
  for (let i = 0; i < 300; i++) {
    patient_nurse.push({
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
      roleId: roles[1],
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const doctor_hospital = [];
  for (let i = 0; i < 100; i++) {
    doctor_hospital.push({
      id: faker.datatype.uuid(),
      doctorId: doctors[Math.floor(i)].id,
      hospitalId: hospitals[Math.floor(i / 10)].id,
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const doctor_specialty = [];
  for (let i = 0; i < 100; i++) {
    doctor_specialty.push({
      id: faker.datatype.uuid(),
      doctorId: doctors[Math.floor(i / 10)].id,
      specialtyId: specialties[Math.floor(i / 10)].id,
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  const patient_doctor = [];
  for (let i = 0; i < 300; i++) {
    patient_doctor.push({
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

  const patient_disease = [];
  for (let i = 0; i < 300; i++) {
    patient_disease.push({
      id: faker.datatype.uuid(),
      starterDate: faker.date.past(),
      isCurrent: faker.datatype.boolean(),
      endDate: this.isCurrent ? null : faker.date.recent(),
      comments: faker.lorem.paragraphs(3),
      patientId: patients[Math.floor(i / 3)].id,
      diseaseId: diseases[Math.floor(i / 3)].id,
      doctorId: doctors[Math.floor(i / 3)].id,
      nurseId: nurses[Math.floor(i / 3)].id,
      created_at: faker.date.recent(),
      updated_at: faker.date.recent(),
    });
  }

  return {
    adresses,
    hospitals,
    services,
    roles,
    patients,
    patient_hospital,
    nurses,
    nurse_hospital,
    specialties,
    doctors,
    doctor_hospital,
    doctor_specialty,
    patient_nurse,
    patient_doctor,
    diseases,
    patient_disease
  };
}

fs.writeFileSync("./database.json", JSON.stringify(generateData()));
