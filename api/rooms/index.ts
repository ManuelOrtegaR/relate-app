import http from '../http';
import { decodeRoomByIdOutput, decodeRoomOutput, decodeRoomsOutput } from './decoders';
import { CreateRoom, RoomByIDOutput, RoomOutput } from './types';

export const getAllRooms = async () => {
  try {
    const { data: response } = await http.get('/rooms');
    const data = await decodeRoomsOutput(response);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export const getRoomById = async (roomId: string) => {
  try {
    const { data: response }: { data: RoomByIDOutput } = await http.get(`/rooms/${roomId}`);
    const data = await decodeRoomByIdOutput(response);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export const createRoom = async (payload: CreateRoom) => {
  try {
    const { data: response }: { data: RoomOutput } = await http.post('/rooms', payload)
    const data = await decodeRoomOutput(response);
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}
