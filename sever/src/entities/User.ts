import { User } from "@prisma/client";

export class UserEntity implements User {
  id: string;
  createdAt: Date;
}
