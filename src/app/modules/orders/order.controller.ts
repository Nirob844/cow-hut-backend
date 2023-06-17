import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IOrder } from './order.interface';
import { OrderService } from './order.service';

const createOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...cow } = req.body;

    const result = await OrderService.createOrder(cow);

    sendResponse<IOrder>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'order created successfully!',
      data: result,
    });
  }
);

export const OrderController = {
  createOrder,
};
