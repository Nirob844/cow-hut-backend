import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ICow } from './cow.interface';
import { CowService } from './cow.service';

const createCow: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...cow } = req.body;

    const result = await CowService.createCow(cow);

    sendResponse<ICow>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'cow created successfully!',
      data: result,
    });
  }
);

export const CowController = {
  createCow,
};
