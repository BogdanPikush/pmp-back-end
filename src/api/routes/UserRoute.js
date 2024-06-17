import {Router} from "express";

import UserController from "../controllers/UserController.js";

const UserRouter = new Router();

UserRouter.get("/user/:email", UserController.getUser);

export default UserRouter;