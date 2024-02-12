export interface IProduct {
  name: string
  price: number
  discount: number
  description: string
  images: string[]
  categoryId: number
  sku: number
  reviews: [
    {
      name: string
      rating: number
      description: string
      date: string
    },
  ]
}

export interface IProductResponse {
  totalProducts: number
  limit: number
  offset: number
  products: IProduct[]
}

export interface IProductQueryParams {
  limit: number
  offset: number
  name?: string
  categoryId?: number
  discounted?: string
  priceMin?: number
  priceMax?: number
}
