import { User } from './types';

export async function decodeUserOutput(payload: User): Promise<User> {
  try {
    const data = await User.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
