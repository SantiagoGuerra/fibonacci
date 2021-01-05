import {RequestHandler} from "express";
import { OK, INTERNAL_SERVER_ERROR } from 'http-status';
import {
  getFibonacciNumber,
} from "../services";

export const getFeedRecordController: RequestHandler = async(request, response) => {
  try {
    const {
      params: {
        number
      }
    } = request;

    const data = await getFibonacciNumber(+number);

    response.status(OK).send(data);
  } catch (error) {
    console.error(error);
    response.status(INTERNAL_SERVER_ERROR).send(error);
  }
};
