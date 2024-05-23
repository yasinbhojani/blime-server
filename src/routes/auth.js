import { Router } from "express";
import { loginHandler, registrationHandler } from "../controller/auth.js";

const router = Router();

router.post("/register", registrationHandler);
router.post("/login", loginHandler);

const authRouter = router;
export default authRouter;
