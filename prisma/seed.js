import { faker } from "@faker-js/faker";
import prisma from "../routes/libs/prismaClient.js";

async function main() {
console.log('logica seeder');

1//creo uniquearray per nome categorie e itero  sul array con map

const categoriesNames = faker.helpers.uniqueArray(
    faker.commerce.department, 5,
).map((categoryName) => ({
    name: categoryName
}));

console.log(categoriesNames);

await prisma.category.createMany({
    data: categoriesNames
})

const category = await prisma.category.findMany()

}

//throw errore

main().catch((e) => {
    console.log(e)

    //se tutto andato a buon fine exit = 0
    process.exit(1)
}).finally(() => prisma.$disconnect())