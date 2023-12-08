export interface INft {
  id: number,
  title: string,
  price: number,
  imagePath: string,
  description: string,
  createdAt: string,
  user: string,
  subCategories: [string]
}

export interface resultNft{
  true:string | undefined
  err: string | undefined
  userApi: string | undefined

}
