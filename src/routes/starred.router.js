import { Router } from "express";

const router = Router();

router.get("/get-starred-boards");

const starredRouter = router;
export default starredRouter;
