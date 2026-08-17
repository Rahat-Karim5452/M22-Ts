type UserRole = "admin" | "user" | "guest" | "moderator";
interface User {
  name: string;
  role: UserRole;
  email: string;
}
interface Admin extends User {
  permissions: string[];
}
interface Moderator extends User {
  moderatedSections: string[];
}
const bigBoss: Admin = {
  permissions: ["manage_users", "edit_content"],
  role: "admin",
  name: "Big Boss",
  email: "big.boss@example.com",
};

// type book = {
//   title: string;
//   author: string;
//   publisher: string;
// };

// type book = {
//   loctation: string;
// };

interface Gift {
  name: string;
}
interface Gift {
  price: number;
}
const birthdayGift: Gift = {
  name: "Watch",
  price: 100,
};
