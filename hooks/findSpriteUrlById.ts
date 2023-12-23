import { AllSprites } from "../api/avatar/types";
import { Avatar } from "../api/user/types";

interface Sprites {
  eyeId: string,
  mouthId: string,
  hairId: string,
  faceId: string,
  noseId: string,
}

export const findSpriteUrlById = (spritesId: Avatar, allSprites: AllSprites) => {
  const spriteUrls: Sprites = {
    eyeId: '',
    mouthId: '',
    hairId: '',
    faceId: '',
    noseId: '',
  };

  Object.keys(spritesId).forEach(category => {
    if (category === 'eyeId') {
      allSprites.eyes.forEach(eye => {
        if (eye.id === spritesId.eyeId) {
          spriteUrls[category] = eye.spriteUrl;
        }
      })
    }
    if (category === 'mouthId') {
      allSprites.mouths.forEach(mouth => {
        if (mouth.id === spritesId.mouthId) {
          spriteUrls[category] = mouth.spriteUrl;
        }
      })
    }
    if (category === 'hairId') {
      allSprites.hairs.forEach(hair => {
        if (hair.id === spritesId.hairId) {
          spriteUrls[category] = hair.spriteUrl;
        }
      })
    }
    if (category === 'faceId') {
      allSprites.faces.forEach(face => {
        if (face.id === spritesId.faceId) {
          spriteUrls[category] = face.spriteUrl;
        }
      })
    }
    if (category === 'noseId') {
      allSprites.noses.forEach(nose => {
        if (nose.id === spritesId.noseId) {
          spriteUrls[category] = nose.spriteUrl;
        }
      })
    }
  });
  return spriteUrls;
};
