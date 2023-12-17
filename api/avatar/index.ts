import http from '../http';
import { decodeUserOutput } from './decoders';

export const getSprites = async () => {
  try {
    const { data: response } = await http.get('/auth/signin');
    const data = await decodeUserOutput(response);
    const { token = '' } = data.meta;
    return { data };
  } catch (error) {
    return Promise.reject(error);
  }
}
