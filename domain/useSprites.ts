import useSWR from 'swr';
import { getAllSprites } from '../api/avatar';

export const useSprites = () => {

  const { data: sprites, error, isLoading } = useSWR('/avatar', getAllSprites);

  return { sprites, error, isLoading }
}

