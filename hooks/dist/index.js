"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/hooks/catch/:userId/:zapId", async (req, res) => {
    try {
        const userId = String(req.params.userId);
        const zapId = String(req.params.zapId);
        const run = await client.zapRun.create({
            data: {
                zapId: zapId,
                metadata: {}
            }
        });
        await client.zapRunOutbox.create({
            data: {
                zapRun: {
                    connect: { id: run.id }
                }
            }
        });
        res.json({ success: true, runId: run.id });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});
app.listen(3000);
//# sourceMappingURL=index.js.map