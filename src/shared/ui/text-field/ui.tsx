import React, { forwardRef, InputHTMLAttributes } from 'react'

import Image from 'next/image'
import clsx from 'clsx'

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  variant: 'standard' | 'filled'
  leadingIcon?: string
  trailingIcon?: string
}

export const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
  ({ className, variant, leadingIcon, trailingIcon, ...props }, ref) => {
    return (
      <div className={clsx('relative w-full', className)}>
        {leadingIcon && (
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Image src={leadingIcon} width={16} height={16} alt="Icon" />
          </div>
        )}
        <input
          className={clsx(
            'block w-full border-gray-300 text-gray-900 text-sm outline-none',
            {
              'bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-600 p-2.5':
                variant === 'filled',
              'bg-transparent border-b focus:ring-blue-500 focus:border-blue-600 py-2.5':
                variant === 'standard',
              'ps-10': leadingIcon,
              'pe-10': trailingIcon,
            },
          )}
          ref={ref}
          {...props}
        />
        {trailingIcon && (
          <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none">
            <Image src={trailingIcon} width={16} height={16} alt="Icon" />
          </div>
        )}
      </div>
    )
  },
)
