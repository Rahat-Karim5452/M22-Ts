type Gender = "Male" | "Female" | "Others";

type Student = {
  name: string;
  roll: number;
  major: string;
  gpa?: number;
  gender?: Gender;
};

const robin: Student = {
  name: "Robin",
  roll: 1,
  major: "Computer Science",
  gpa: 3.8,
};

const mobin: Student = {
  name: "Mobin",
  roll: 2,
  major: "Information Technology",
  gpa: 3.6,
};

const Tobin: Student = {
  name: "Tobin",
  roll: 3,
  major: "ITE",
  //   gpa: 3.5, Optional
};
