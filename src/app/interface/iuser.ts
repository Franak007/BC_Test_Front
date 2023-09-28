export interface IUser {
  id: number,
  email: string,
  roles: [string],
  password: string,
  firstName: string,
  lastName: string,
  username: string,
  birthDate: string,
  nfts: [string],
  address: [string]
}
