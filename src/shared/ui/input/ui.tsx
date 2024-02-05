import React, { forwardRef, InputHTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'
import Image from 'next/image'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  variant: 'primary' | 'secondary'
  icon?: string
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ className, variant, icon, ...props }, ref) => {
    return (
      <div className={cn(styles['field'], className)}>
        <input
          className={cn(styles['input'], {
            [styles['primary']]: variant === 'primary',
          })}
          ref={ref}
          {...props}
        />
        {icon && (
          <Image
            className={styles['icon']}
            src={icon}
            alt={''}
            width={18}
            height={18}
          />
        )}
      </div>
    )
  },
)
