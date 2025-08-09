export interface UserProfilePrototype {
  username: string;
  email: string;
  city: string;
  country: string;
  clone(): UserProfilePrototype;
}
