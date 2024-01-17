import { Favorite } from "@prisma/client";
import { UserEntity } from "./User";

export class CharacterEntity implements Favorite {
  id: string;
  userId: string;
  characterId: string;
  user: UserEntity; // Incluir la entidad de usuario asociada al personaje
}
