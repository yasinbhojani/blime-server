import { Router } from "express";

//^ controller
import { demoController } from "../controller/demo-controller.js";

const router = Router();

router.get("/demo-insert", demoController)

const demoRouter = router;
export default demoRouter;
