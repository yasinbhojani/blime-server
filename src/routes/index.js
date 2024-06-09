import { Router } from "express";

// routes
import authRouter from "./auth.router.js";
import starredRouter from "./starred.router.js";
import workspaceRouter from "./workspace.router.js";
import boardRouter from "./board.router.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/starred", starredRouter);
router.use("/workspace", workspaceRouter);
router.use("/board", boardRouter);

export default router;
