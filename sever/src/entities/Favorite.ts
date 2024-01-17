import { Favorite } from "@prisma/client";
import { UserEntity } from "./User";

export class FavoriteEntity implements Favorite {
  id: string;
  userId: string;
  characterId: string;
}
