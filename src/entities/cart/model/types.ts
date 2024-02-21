import { IProduct } from '@/shared/api'

export interface ICartItem {
	product: IProduct
	quantity: number
}
