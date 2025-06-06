import { Router } from "express";
import adminRouter from "./adminRouter.js";
import authRouter from './auth.js';
import userRouter from './userRouter.js';
import jobPostRouter from "./jobPostRouter.js";
import projectRouter from "./projectRouter.js";
import paymentRouter from "./paymentRouter.js";


const v1Router = Router();

v1Router.use('/admin', adminRouter);
v1Router.use('/auth', authRouter);
v1Router.use('/users', userRouter);
v1Router.use('/jobs', jobPostRouter);
v1Router.use('/projects', projectRouter);
v1Router.use('/payments', paymentRouter);

export default v1Router;
