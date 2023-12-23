import useSWR from 'swr';
import { getAllSprites } from '../api/avatar';
import { getCharacterData } from '../api/gameData';

export const useGameIds = () => {

  const { data: gameIds, error, isLoading } = useSWR('/characters/data', getCharacterData);

  return { gameIds, error, isLoading }
}

