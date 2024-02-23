import { IProduct } from '@/shared/api/services/product'

export interface ICartItem {
	product: IProduct
	quantity: number
}
