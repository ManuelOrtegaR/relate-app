import useSWR from 'swr';
import { getAllRooms } from '../api/rooms';

export const useRooms = () => {

  const { data: rooms, error, isLoading } = useSWR('/rooms', getAllRooms);

  return { rooms, error, isLoading }
}

