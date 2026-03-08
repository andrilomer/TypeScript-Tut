let response: any = "42";

//below is an example of forceful type assertion and this is not a conversion
let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name":"Who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();

let newValue: unknown;
newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
if (typeof newValue === "string") {
  newValue.toUpperCase();
}

try {
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  }

  console.log(err);
}

const data: unknown = "chai aur code";
const strData: string = data as string; //forceful assertion as string

type Role = "admin" | "user" | "superAdmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log(`Redirecting to admin dashboard`);
    return;
  }

  if (role === "user") {
    console.log(`Redirecting to user dashboard`);
    return;
  }

  role; //since we missed a case regarding the superadmin it is automatically assigned as superadmin this helps in checking if we missed something in case we had only two ie: admin and user this variable would have been type as never
}

function neverReturn(): never {
  while (true) {}
}
