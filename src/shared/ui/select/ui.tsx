'use client'

import cn from 'classnames'
import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { ISelectOption } from './types'
import styles from './styles.module.scss'

interface TSelectProps {
  options: ISelectOption[]
  value: string | string[] | undefined
  label: string
  className?: string
  onChange: (option: ISelectOption) => void
}

export const Select = ({
  options,
  value,
  label,
  onChange,
  className,
}: TSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const selected =
    options.find((option) => option?.value === value) ?? options[0]

  const handleClose = () => setIsOpen(false)

  const handleSelect = (option: ISelectOption) => () => {
    onChange(option)
    handleClose()
  }

  return (
    <div className={cn(styles['select'], className)}>
      <motion.button
        className={styles['button']}
        onClick={() => setIsOpen(!isOpen)}>
        <div className={styles['meta']}>
          {selected.value ? selected.label : label}
        </div>
        <Image
          src={'/icons/arrow-down.svg'}
          width={7}
          height={14}
          alt="Category selector"
        />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles['list']}>
            {options.map((option) => (
              <div
                key={option.label}
                onClick={handleSelect(option)}
                className={styles['item']}>
                {option?.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
