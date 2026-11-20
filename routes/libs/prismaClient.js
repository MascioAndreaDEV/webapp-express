// Importazione di dotenv, PrismaClient e dell'adapter MariaDB
import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

// Configurazione adapter con .env file
const adapter = new PrismaMariaDb(process.env.DATABASE_URL);

//inizializza sessione 
const prisma = new PrismaClient({
    adapter,
});

export default prisma;