// Product
export interface IProduct {
	name: string
	price: number
	discount: number
	description: string
	images: string[]
	categoryId: number
	sku: number
	reviews: IReview[]
}

export interface IProductList {
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

// Filter
export interface IFilter {
	categories: {
		id: number
		name: string
	}[]
	maxPrice: number
	minPrice: number
}

// Review
export interface IReview {
	name: string
	rating: number
	description: string
	date: string
}

export interface IAddReviewDto {
	name: string
	email: string
	rating: number
	review: string
}
