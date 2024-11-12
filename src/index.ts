import { AppDataSource } from "./data-source";
import * as express from "express";
import * as dotenv from "dotenv";
import * as cors from 'cors'
import { Request, Response } from "express";
import { userRouter } from "./routes/user.routes";
import "reflect-metadata";
import { errorHandler } from "./middleware/errorHandler";
import { CategoryRouter } from "./routes/categories.routes";
import { CutoutRouter } from "./routes/cutouts.routes";
import { CurrencyRouter } from "./routes/currencies.routes";
import { ProduceRouter } from "./routes/produce.routes";
import { UnitOfMeasureRouter } from "./routes/unitofmeasure.routes";
import { ConversionFactorRouter } from "./routes/conversionfactors.router";
dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3000', // Allow only your React app's origin
  methods: 'GET,POST,PUT,DELETE',  // Specify allowed methods
  credentials: true,               // Include this if your requests use credentials (e.g., cookies)
}));

app.use(express.json());
const { PORT = 3000 } = process.env;
app.use(errorHandler);
app.use("/auth", userRouter);
app.use("/api/categories", CategoryRouter);
app.use("/api/currencies", CurrencyRouter);
app.use("/api/cutouts", CutoutRouter);
app.use("/api/produce", ProduceRouter);
app.use("/api/unitofmeasure", UnitOfMeasureRouter);
app.use("/api/conversionfactors", ConversionFactorRouter);

app.get("*", (req: Request, res: Response) => {
  res.status(505).json({ message: "Bad Request" });
});

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));
