import ApiError from '../../../errors/ApiError';
import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (cow: IOrder): Promise<IOrder | null> => {
  const createdCow = await Order.create(cow);

  if (!createdCow) {
    throw new ApiError(400, 'failed to create Cow !');
  }
  return createdCow;
};

export const OrderService = {
  createOrder,
};
