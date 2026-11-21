import { faker } from "@faker-js/faker";
import prisma from "../routes/libs/prismaClient.js";

async function main() {
console.log('logica seeder');

// Creo uniqueArray per i nomi delle categorie e itero sull'array con map

const categoriesNames = faker.helpers.uniqueArray(
    faker.commerce.department, 5
).map((categoryName) => ({
    name: categoryName
}));

//console.log(categoriesNames);

await prisma.category.createMany({
    data: categoriesNames
})


const categories = await prisma.category.findMany()

console.log(categories);

}

//throw errore

main().catch((e) => {
    console.log(e)

    //se tutto andato a buon fine exit = 0
    process.exit(1)
}).finally(() => prisma.$disconnect())