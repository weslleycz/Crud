import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { router } from "./routes";

const app = express();

app.use(helmet());

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});


dotenv.config();

//Definindo json como padrão
app.use(express.json());

app.use(router);

//Subindo servidor
app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Server started on port:${process.env.PORT || 3000}`);
});

