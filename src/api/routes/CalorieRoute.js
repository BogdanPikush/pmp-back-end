import {Router} from "express";

import CalorieController from "../controllers/CalorieController.js";

const CalorieRouter = new Router();

CalorieRouter.post("/saveCalories", CalorieController.saveCalories);
CalorieRouter.get("/calories", CalorieController.calories);

export default CalorieRouter;