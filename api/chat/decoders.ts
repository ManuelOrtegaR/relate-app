import { ChatByIdOutput, CreateMessageOutput } from "./types";

export async function decodeCreateMessageOutput(payload: CreateMessageOutput): Promise<CreateMessageOutput> {
  try {
    const data = await CreateMessageOutput.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}


export async function decodeChatByIdOutput(payload: ChatByIdOutput): Promise<ChatByIdOutput> {
  try {
    const data = await ChatByIdOutput.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

