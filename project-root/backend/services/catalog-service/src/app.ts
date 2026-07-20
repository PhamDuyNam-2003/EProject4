import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import hotelRoute from "./modules/hotel/routes/hotel.route.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", service: "catalog-service" });
});

app.use("/api/hotels", hotelRoute);

export default app;
