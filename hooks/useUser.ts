import { useEffect, useState } from "react"
import { getMyUser } from "../api/user"
import { Avatar, Character, User } from "../api/user/types"
import { getSelectedCharacter } from "../api/session"
import { getAvatarSprites } from "../api/avatar"
import { AvatarUrls } from "../api/avatar/types"

interface Sprites {
  eyeId: string,
  mouthId: string,
  hairId: string,
  faceId: string,
  noseId: string,
}

export const useUser = () => {

  const [user, setUser] = useState<User | null>(null)
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown | null>(null)
  const [sprites, setSprites] = useState<AvatarUrls | null>(null)

  const getUser = async () => {
    setLoading(true)
    try {
      const response = await getMyUser()
      const selected = await getSelectedCharacter();
      if (!selected && response) {
        const character = response.characters[selected];
        setCharacter(character);
        setUser(response)
        const spritesId = response.characters[selected].avatar
        const foundSprites = await getAvatarSprites(spritesId)
        setSprites(foundSprites);
      }
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return { user, character, sprites, loading, error }
}
