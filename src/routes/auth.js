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
} from "../controller/auth";

const router = Router();

//^ ==> POST routes
router.post("/normal-registration", normalRegistrationHandler);
router.post("/login", normalLoginHandler);

router.post("/github-login", githubLoginHandler); //^ sadiqhasan route
router.post("/github-registration", githubRegistrationHandler); //^ sadiqhasan route

router.post("/microsoft-registration", microsoftRegistrationHandler); //^ yasin route
router.post("/microsoft-login", microsoftLoginHandler); //^ yasin route

router.post("/google-registration", googleRegistrationHandler); //^ soham route
router.post("/google-login", googleLoginHandler); //^ soham route

const authRouter = router;
export default authRouter;
