import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

async function main(){
    const pendingpayouts = await client.zapRunOutbox.findMany({
        take: 10
    });
    pe
}
main();