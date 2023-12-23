import { AvatarData } from '../character/types';
import http from '../http';
import { decodeAllSpritesOutput, decodeGetAvatarOutput } from './decoders';
import { AllSprites, AvatarUrls } from './types';

export const getAllSprites = async () => {
  try {
    const { data: response }: { data: AllSprites } = await http.get('/avatar');
    const data = await decodeAllSpritesOutput(response);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export const getAvatarSprites = async (payload: AvatarData) => {
  try {
    const { data: response }: { data: AvatarUrls } = await http.post('/avatar', payload);
    const data = await decodeGetAvatarOutput(response);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
