import { CreateCharacterOutput } from './types';

export async function decodeCharacterOutput(payload: CreateCharacterOutput): Promise<CreateCharacterOutput> {
  try {
    const data = await CreateCharacterOutput.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
