import styles from './styles.module.scss'
import { IProduct, ProductCard } from '@/entities/product'

interface IListProps {
  products: IProduct[]
}

export const List = ({ products }: IListProps) => {
  return (
    <div className={styles['grid']}>
      {products.map((product: IProduct, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  )
}
