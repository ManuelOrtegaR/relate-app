import { GameIDS } from './types';

export async function decodeGamesIDSOutput(payload: GameIDS): Promise<GameIDS> {
  try {
    const data = await GameIDS.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
