import http from '../http';
import { decodeGamesIDSOutput } from './decoders';
import { GameIDS } from './types';

export const getCharacterData = async () => {
  try {
    const { data: response }: { data: GameIDS } = await http.get('/characters/data');
    const data = await decodeGamesIDSOutput(response);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
