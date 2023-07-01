import * as EmailValidator from 'email-validator';
import { Data, User, Spots, getData, setData } from './dataStore';


interface registerUserReturn {
  id: number;
}

interface Error {
  error: string;
}

const errorMessages = {
  invalidName: {error: "Error, name cannot be empty string"},
  invalidPassword: {error: "Error, password cannot be empty string"},
  invalidEmail: {error: "Error, email must be real email"},
  invalidId: {error: "Error, the id given does not correspond to an existing user"},
}

const dummyUser: User = {
  name: "DUMMY",
  email: "DUMMY@EMAIL.COM",
  password: "DUMMY",
  id: 99999999999,
}

// const user = registerUser("Jesse", "Some@email.com", "Password") as registerUserReturn;
// registerUser("Jesse2", "Some@email.com", "Password2");
// registerUser("Jesse3", "Some@email.com", "Password3");
// console.log(getUserData(user.id));
// console.log(listAllUsers());

export function registerUser(name: string, email: string, password: string): registerUserReturn | Error {

  if (name === '') {
    return errorMessages.invalidName;
  }
  if (password === '') {
    return errorMessages.invalidPassword;
  }

  let validator = require("email-validator");
  if ( !validator.validate(email) ) {
    return errorMessages.invalidEmail;
  }

  let data = getData();
  let id = Math.floor(Math.random() * 10000);
  let uniqueId = false;

  while (!uniqueId) {
    uniqueId = true;
    for (const user of data.users) {
      if (user.id === id) {
        let id = Math.floor(Math.random() * 10000);
        uniqueId = false;
      }
    }
  }

    const newUser: User = {
      name: name,
      email: email,
      password: password,
      id: id,
    } 

    data.users.push(newUser);
    setData(data);

    return {id: id};
}

export function getUserData(id: number): Error | User {

  let currentUser: User = dummyUser;
  const data = getData();

  for (const user of data.users) {
    if (user.id === id) {
      currentUser = user;
    }
  }
  if (currentUser === dummyUser) {
    return errorMessages.invalidId;
  }

  return currentUser;
}

export function listAllUsers(): User[] {
  
  let currentUsers: User[] = [];
  const data = getData();

  for (const user of data.users) {
    currentUsers.push(user);
  }

  return currentUsers;
}