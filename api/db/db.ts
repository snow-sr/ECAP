import { PrismaClient } from "@prisma/client";
const prisma: PrismaClient = new PrismaClient();

export async function testConnection() {
  await prisma.$connect();
  console.log("Sucessfully Connected to Prisma");
  prisma.$disconnect();
}
