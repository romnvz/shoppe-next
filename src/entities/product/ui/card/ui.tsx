import Image from 'next/image'

import { IProduct } from '@/entities/product'
import styles from './styles.module.scss'

type TCardProps = {
  product: Partial<IProduct>
}

export const Card = ({ product }: TCardProps) => {
  return (
    <div
      className={styles['card']}>
      <div className={styles['head']}>
        <Image
          className={styles['image']}
          src={product.images![0]}
          alt={product.name ?? ''}
          fill
        />
      </div>
      <div className={styles['body']}>
        <div className={styles['name']}>{product?.name}</div>
        <div className={styles['price']}>
          {product.discount && (
            <span className={styles['old']}>
              $ {product.price! + product.discount}
            </span>
          )}
          $ {product.price}
        </div>
      </div>
    </div>
  )
}
