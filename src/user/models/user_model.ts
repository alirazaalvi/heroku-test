export interface User {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface UserSignupViewModel {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  role: number;
}

export interface UserViewModel {
  firstName: string;
  lastName: string;
  email: string;
  role: number;
}
