// npm i @faker-js/faker
import { fakerES as faker } from "@faker-js/faker";

export const generateUser = () => {
  return {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    image: faker.image.url(),
  };
};

// console.log(generateUser());

/* ------------------------------------ - ----------------------------------- */

import casual from 'casual'

export const generateUserCasual = () => {
    return {
        name: casual.first_name,
        email: casual.email,
        website: casual.url,
        image: casual.url
    }
}

// console.log(generateUserCasual());

/* ------------------------------------ - ----------------------------------- */

export const generateUserManual = () => {
    const names = ['Juan', 'Ana', 'Pedro', 'María', 'Luis', 'Carmen'];
    const random = (arr) => arr[Math.floor(Math.random() * arr.length)]

    const name = random(names);
    const email = `${name.toLowerCase()}@mail.com`;
    const website = `https://www.${name.toLowerCase()}.com`;
    const image = `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`;

    return {
        name,
        email,
        website,
        image
    }
}

// console.log(generateUserManual());
