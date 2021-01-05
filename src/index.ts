import * as express from "express";
import * as cors from "cors";
import * as logger from 'morgan';
import {fibonacciRouter} from "./routes";
import * as cookieParser from 'cookie-parser';

const app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", fibonacciRouter);

app.listen(8080, () => {
  console.log("Server is listening at port 8080");
});
