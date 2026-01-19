import express, { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const client=new PrismaClient()
const app=express()
app.use(express.json())
app.post("/hooks/catch/:userId/:zapId",async (req: Request,res: Response)=>{
    try {
        const userId=String(req.params.userId)
        const zapId=String(req.params.zapId)
        const run= await client.zapRun.create({
            data:{
                zapId:zapId,
                metadata:{}
            }
        })
        await client.zapRunOutbox.create({
            data: {
                zapRun: {
                    connect: { id: run.id }
                }
            }
        })
        res.json({ success: true, runId: run.id })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal server error" })
    }
})
app.listen(3000)