import { faker } from "@faker-js/faker";
import prisma from "../routes/libs/prismaClient.js";

async function main() {
console.log('logica seeder');

//creo uniquearray per nome categorie

const categoriesNames = faker.helpers.uniqueArray(
    faker.commerce.department, 5,
)

console.log(categoriesNames);

}

//throw errore

main().catch((e) => {
    console.log(e)

    //se tutto andato a buon fine exit = 0
    process.exit(1)
}).finally(() => prisma.$disconnect())