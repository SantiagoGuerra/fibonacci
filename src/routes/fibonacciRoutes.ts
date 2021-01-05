import * as express from "express";
import {
  getFeedRecordController,
} from '../controllers';


export const fibonacciRouter = express.Router();

// get post by id
fibonacciRouter.get('/fibonacci/:number', getFeedRecordController);
