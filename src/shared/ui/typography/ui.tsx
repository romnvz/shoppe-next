'use client'

import { ReactNode } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

const variantsMapping: Record<string, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
}

type THeadingProps = {
  className?: string
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body'
}

export const Typography = ({ className, children, variant = 'h1', ...props }: THeadingProps) => {
  const Component = variant ? variantsMapping[variant] : 'h1'

  return (
    <Component className={classNames(styles['typography'], styles[variant], className)} {...props}>
      {children}
    </Component>
  )
}
