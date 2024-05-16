import { Router } from "express";

//^ controllers
import {
  normalLoginHandler,
  githubLoginHandler,
  googleLoginHandler,
  microsoftLoginHandler,
  githubRegistrationHandler,
  googleRegistrationHandler,
  microsoftRegistrationHandler,
  normalRegistrationHandler,
} from "../controller/auth.js ";

const router = Router();

//^ ==> POST routes
router.post("/normal-registration", normalRegistrationHandler); //^ soham route
router.post("/login", normalLoginHandler); //^ soham route

router.post("/github-login", githubLoginHandler); //^ sadiqhasan route
router.post("/github-registration", githubRegistrationHandler); //^ sadiqhasan route

router.post("/google-registration", googleRegistrationHandler); //^ yasin route
router.post("/google-login", googleLoginHandler); //^ yasin route

const authRouter = router;
export default authRouter;
