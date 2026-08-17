enum Day {
  Monday, //evabe numericly ase
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
const offDay = Day.Sunday;
console.log(Day.Friday);

//Evabe dile string akare asbe.
enum Roles {
  Admin = "Admin",
  Moderator = "Moderator",
}
console.log(Roles.Admin);
