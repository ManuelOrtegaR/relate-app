import useSWR from 'swr';
import { getRoomById } from '../api/rooms';

export const useRoom = (roomId: string) => {

  const { data: room, error, isLoading } = useSWR(`/rooms/${roomId}`, () => getRoomById(roomId));

  return { room, error, isLoading }
}

