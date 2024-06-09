import { Router } from "express";
import { createWorkspaceHandler, getWorkspaceHandler } from "../controller/workspace.controller.js";

const router = Router();

router.post("/", createWorkspaceHandler);
router.get("/", getWorkspaceHandler);

const workspaceRouter = router;
export default workspaceRouter;
