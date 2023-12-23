import http from '../http';
import { decodeCharacterOutput } from './decoders';
import { CreateCharacter } from './types';



export const createCharacter = async (payload: CreateCharacter) => {
  try {
    const { data: response } = await http.post('/characters', payload);
    const data = await decodeCharacterOutput(response);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
