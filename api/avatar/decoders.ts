import { AllSprites, AvatarUrls } from './types';

export async function decodeAllSpritesOutput(payload: AllSprites): Promise<AllSprites> {
  try {
    const data = await AllSprites.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function decodeGetAvatarOutput(payload: AvatarUrls): Promise<AvatarUrls> {
  try {
    const data = await AvatarUrls.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
