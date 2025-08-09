import { UserProfile } from "./UserProfile";

const user1 = new UserProfile("John", "john@example.com", "New York", "USA");

const user2 = user1.clone() as UserProfile;

user2.username = "Emily";
user2.email = "emily@example.com";

console.log(user1);
console.log(user2);
