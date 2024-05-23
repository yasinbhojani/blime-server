import { Router } from "express";

// routes
import authRouter from "./auth.js";
import starredRouter from "./starred.router.js"

const router = Router();

router.use("/auth", authRouter);
router.use("/starred", starredRouter)

export default router;
