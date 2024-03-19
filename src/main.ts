import express from "express";
import { userRouter } from "./router/userRouter";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();

const port = 6969;

app.use("/user", userRouter);

app.listen(port, () => {
  console.log("Opentrail server is running");
});
