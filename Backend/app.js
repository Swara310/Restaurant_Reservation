
import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import {dbConnection} from "./database/dbConnection.js";
import reservationRoute from './routes/reservationRoute.js';
import { ErrorMiddleware } from './middlewares/error.js';



const app = express();
dotenv.config({path: "./config/config.env"});


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// ✅ Correct CORS Configuration
app.use(
  cors({
    origin: "https://restaurant-reservation-nine.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, 
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation",reservationRoute);


dbConnection();
app.use(ErrorMiddleware);

export default app;