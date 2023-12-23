import { RoomItem, RoomOutput, RoomsOutput, RoomByIdOutput, RoomByIDOutput } from './types';

export async function decodeRoomOutput(payload: RoomOutput): Promise<RoomOutput> {
  try {
    const data = await RoomOutput.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function decodeRoomsOutput(payload: RoomItem[]): Promise<RoomItem[]> {
  try {
    const data = await RoomsOutput.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
export async function decodeRoomByIdOutput(payload: RoomByIDOutput): Promise<RoomByIDOutput> {
  try {
    const data = await RoomByIdOutput.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
