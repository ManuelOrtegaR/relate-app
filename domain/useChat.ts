import useSWR from 'swr';
import { getChatById } from '../api/chat';


export const useChat = (chatId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    chatId ? `/chats/${chatId}` : null,
    () => getChatById(chatId),
  );

  // function addMessage({ newMessage }) {
  //   mutate((prevData) => {
  //     return {
  //       ...prevData,
  //       messages: [newMessage, ...prevData.messages],
  //     };
  //   }, false);
  // }

  return {
    data,
    error,
    isLoading,
    // actions: {
    //   addMessage,
    // },
  };
}
