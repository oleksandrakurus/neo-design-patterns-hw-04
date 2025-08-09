import { UserProfilePrototype } from "./UserProfilePrototype";

export class UserProfile implements UserProfilePrototype {
  constructor(
    public username: string,
    public email: string,
    public city: string,
    public country: string
  ) {}

  clone(): UserProfilePrototype {
    return new UserProfile(this.username, this.email, this.city, this.country);
  }
}
