import http from '../http';
import { decodeChatByIdOutput, decodeCreateMessageOutput } from './decoders';
import { ChatByIdOutput, CreateMessageOutput } from './types';

interface Message {
  content: string;
  conversationId?: string;
  chatId?: string;
}

export const createMessage = async (payload: Message) => {
  try {
    const { data: response }: { data: CreateMessageOutput } = await http.post('/messages', payload);
    const data = await decodeCreateMessageOutput(response);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export const getChatById = async (chatId: string) => {
  try {
    const { data: response }: { data: ChatByIdOutput } = await http.get(`/chats/${chatId}`);
    const data = await decodeChatByIdOutput(response);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
