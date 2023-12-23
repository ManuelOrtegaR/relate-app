import { z } from 'zod';

// Generated by https://quicktype.io

export interface AllSprites {
  eyes: Sprite[];
  faces: Sprite[];
  hairs: Sprite[];
  mouths: Sprite[];
  noses: Sprite[];
}

export interface Sprite {
  id: string;
  spriteName: string;
  spriteUrl: string;
  spriteColor?: string;
}

export interface AvatarUrls {
  faceUrl: Sprite;
  eyeUrl: Sprite;
  hairUrl: Sprite;
  mouthUrl: Sprite;
  noseUrl: Sprite;
}

const Sprite = z.object({
  id: z.string(),
  spriteName: z.string(),
  spriteUrl: z.string(),
  spriteColor: z.string().optional()
})

export const AllSprites = z.object({
  eyes: z.array(Sprite),
  faces: z.array(Sprite),
  hairs: z.array(Sprite),
  mouths: z.array(Sprite),
  noses: z.array(Sprite)
})

export const AvatarUrls = z.object({
  faceUrl: Sprite,
  eyeUrl: Sprite,
  hairUrl: Sprite,
  mouthUrl: Sprite,
  noseUrl: Sprite,
})
