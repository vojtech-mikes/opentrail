import express from "express";

export const userRouter = express.Router();

const path = "/";

userRouter.get(path, (req, res) => {
  res.send("Hello World 2");
});

userRouter.post(path, (req, res) => {
  res.send("Hello from post");
});

userRouter.delete(path, (req, res) => {
  res.statusCode = 200;
});
