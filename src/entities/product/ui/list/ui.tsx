import { IProduct } from '@/shared/api'
import { ProductCard } from '@/entities/product'

interface IListProps {
  products: IProduct[]
}

export const List = ({ products }: IListProps) => {
  return (
    <div className={'grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12'}>
      {products.map((product: IProduct, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  )
}
