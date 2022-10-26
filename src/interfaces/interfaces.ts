export interface Products {
  id?: number,
  name: string,
  amount: string,
  // orderId: number,
}

export interface User {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface UserToken {
  id?: number,
  username: string,
}

export interface Order {
  id?: number,
  userId: number,
  productsIds: [],
}

export interface Login {
  id?: number,
  username: string,
  password: string,
}

export interface Auth {
  id: number,
  userename: string,
}