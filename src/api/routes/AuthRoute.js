import {Router} from "express";

import AuthController from "../controllers/AuthController.js";

const AuthRouter = new Router();

AuthRouter.post("/registration", AuthController.registration);
AuthRouter.post("/login", AuthController.login);

export default AuthRouter;