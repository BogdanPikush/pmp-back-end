import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from 'mongoose';
// import cors from 'cors';

import AuthRouter from "./src/api/routes/AuthRoute.js";
import CalorieRouter from "./src/api/routes/CalorieRoute.js";

await mongoose
  .connect(process.env.URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connect to MongoDB"))
  .catch((err) => console.log(`DB connection error: ${err}`));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", AuthRouter);
app.use("/api", CalorieRouter);


app.listen(process.env.PORT, () => {
  console.log(`Server started in port - ${process.env.PORT}`);
});