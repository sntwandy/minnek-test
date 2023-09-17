/**
 * Interfaces types
 */

// Dog
export interface Dog {
  name: string;
  breed: string;
  subBreed: string[];
}

// User interface
export interface User {
  _id?: string;
  email: string;
  password: string;
}

/**
 * Login interface
 */

export interface UserLogin {
  email: string;
  password: string;
}

/**
 * JWT interface
 */
export interface JWT {
  accessToken: string;
}

export interface UserJWT {
  sub?: string;
  email: string;
}

export interface IJWT {
  sub: string;
  name: string;
}