import { PrismaClient } from "@prisma/client";

const db = new PrismaClient()

export async function getTricks() {
    return await db.trick.findMany()
}