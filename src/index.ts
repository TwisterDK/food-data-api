import { AppDataSource } from "./data-source";
import * as express from "express";
import * as dotenv from "dotenv";
import * as cors from 'cors';
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

// Determine the origin for CORS dynamically based on the environment
const allowedOrigins = [
  'http://localhost:3000',  // For local development (React development server)
  'http://localhost',  // For local development in docker
  'http://foodstack-react-frontend:80', // For Docker (React container name in the stack)
  'http://192.168.1.66', // If accessing the React app directly from the Raspberry Pi's IP
  'http://foodstack-react-frontend', // Container name in Docker
  'http://twisterdk.duckdns.org', // DYNDNS name  
  'http://twisterdk.duckdns.org:19200', // DYNDNS name    
];

app.use(cors({
  origin: (origin, callback) => {
    // Check if the request's origin matches one of the allowed origins
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      // Log the origin that caused the error
      console.error(`CORS error: Request from origin ${origin} is not allowed.`);
      callback(new Error(`CORS not allowed by the API for origin: ${origin}`));  // Reject the request with an error
    }
  },
  methods: 'GET,POST,PUT,DELETE',
  credentials: true, // Allow credentials like cookies if needed
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


// import { AppDataSource } from "./data-source";
// import * as express from "express";
// import * as dotenv from "dotenv";
// import * as cors from 'cors'
// import { Request, Response } from "express";
// import { userRouter } from "./routes/user.routes";
// import "reflect-metadata";
// import { errorHandler } from "./middleware/errorHandler";
// import { CategoryRouter } from "./routes/categories.routes";
// import { CutoutRouter } from "./routes/cutouts.routes";
// import { CurrencyRouter } from "./routes/currencies.routes";
// import { ProduceRouter } from "./routes/produce.routes";
// import { UnitOfMeasureRouter } from "./routes/unitofmeasure.routes";
// import { ConversionFactorRouter } from "./routes/conversionfactors.router";
// dotenv.config();

// const app = express();

// // Enable CORS for all routes
// app.use(cors({
//   origin: 'http://localhost:3000', // Allow only your React app's origin
//   methods: 'GET,POST,PUT,DELETE',  // Specify allowed methods
//   credentials: true,               // Include this if your requests use credentials (e.g., cookies)
// }));

// app.use(express.json());
// const { PORT = 3000 } = process.env;
// app.use(errorHandler);
// app.use("/auth", userRouter);
// app.use("/api/categories", CategoryRouter);
// app.use("/api/currencies", CurrencyRouter);
// app.use("/api/cutouts", CutoutRouter);
// app.use("/api/produce", ProduceRouter);
// app.use("/api/unitofmeasure", UnitOfMeasureRouter);
// app.use("/api/conversionfactors", ConversionFactorRouter);

// app.get("*", (req: Request, res: Response) => {
//   res.status(505).json({ message: "Bad Request" });
// });

// AppDataSource.initialize()
//   .then(async () => {
//     app.listen(PORT, () => {
//       console.log("Server is running on http://localhost:" + PORT);
//     });
//     console.log("Data Source has been initialized!");
//   })
//   .catch((error) => console.log(error));
