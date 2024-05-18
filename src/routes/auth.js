import { Router } from "express";

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

router.post("/normal-registration", normalRegistrationHandler);
router.post("/login", normalLoginHandler);

router.post("/github-login", githubLoginHandler);
router.post("/github-registration", githubRegistrationHandler);

router.post("/google-registration", googleRegistrationHandler);
router.post("/google-login", googleLoginHandler);

const authRouter = router;
export default authRouter;
