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
