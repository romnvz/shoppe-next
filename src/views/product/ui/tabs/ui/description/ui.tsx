import { IProduct } from '@/shared/api'

export const Description = ({ product }: { product: IProduct }) => {
	return <div>{product.description}</div>
}
