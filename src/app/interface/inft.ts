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
