import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'light' | 'dark'
  size: 'large' | 'small'
}

export const Button = ({
  variant = 'dark',
  size = 'large',
  className,
  children,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={classNames(styles['button'], className, {
        [styles['large']]: size === 'large',
        [styles['small']]: size === 'small',
        [styles['light']]: variant === 'light',
        [styles['dark']]: variant === 'dark',
      })}
      {...props}>
      {children}
    </button>
  )
}
