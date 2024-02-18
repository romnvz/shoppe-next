'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { ISelectOption } from './types'

interface TSelectProps {
  options: ISelectOption[]
  value?: string | string[]
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
    <div
      className={clsx(
        'w-full relative rounded-[4px] border border-blue-gray-200 bg-transparent px-3 py-2.5',
        className,
      )}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between">
        <div className={''}>{selected.value ? selected.label : label}</div>
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
            className={
              'w-full absolute top-12 left-0 right-0 bg-white border border-blue-gray-200 z-10'
            }>
            {options.map((option) => (
              <div
                key={option.label}
                onClick={handleSelect(option)}
                className="px-3 py-2.5 hover:bg-yellow-800 hover:opacity-80 hover:text-white">
                {option?.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
