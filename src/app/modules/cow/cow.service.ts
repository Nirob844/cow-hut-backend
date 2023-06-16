import ApiError from '../../../errors/ApiError';
import { ICow } from './cow.interface';
import { Cow } from './cow.model';

const createCow = async (cow: ICow): Promise<ICow | null> => {
  const createdCow = await Cow.create(cow);

  if (!createdCow) {
    throw new ApiError(400, 'failed to create user !');
  }
  return createdCow;
};

export const CowService = {
  createCow,
};
