import http from '../http';
import { decodeUserOutput } from './decoders';
import { User } from './types';


export const getMyUser = async () => {
  try {
    const { data: response }: { data: User } = await http.get('/user/me');
    const data = await decodeUserOutput(response);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
