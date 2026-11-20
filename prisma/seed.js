
import prisma from "../routes/libs/prismaClient.js";

function main() {
console.log('logica seeder');

}

//throw errore

main().catch((e) => {
    console.log(e)

    //se tutto andato a buon fine exit = 0
    process.exit(1)
}).finally(() => prisma.$disconnect())