import { z } from 'zod';

export const UserData = z.object({
  birthdate: z.string(),
  coins: z.number(),
  createdAt: z.string(),
  email: z.string(),
  emailVerify: z.boolean(),
  firebaseUid: z.string(),
  gems: z.number(),
  id: z.string(),
  nickname: z.string(),
  notifications: z.boolean(),
  picture: z.string(),
  suscription: z.boolean(),
  updatedAt: z.string().nullable(),
  status: z.string(),
  characters: z.any().nullable().optional()
});

export const UserOutput = z.object({
  data: UserData,
  message: z.string(),
  meta: z.object({
    token: z.string()
  })
});


export type UserType = z.infer<typeof UserOutput>;
