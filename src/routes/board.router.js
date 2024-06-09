import { Router } from "express";
import { createBoardHandler } from "../controller/board.controller.js";

const router = Router();

router.post("/", createBoardHandler);
router.get("/");

const boardRouter = router;
export default boardRouter;
