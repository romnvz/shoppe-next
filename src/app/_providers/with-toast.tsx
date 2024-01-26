'use client'

import dynamic from 'next/dynamic'
import { PropsWithChildren } from 'react'

const Toaster = dynamic(
  async () => {
    const { Toaster } = await import('react-hot-toast')
    return Toaster
  },
  {
    ssr: false,
  },
)

export const WithToastProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Toaster position='bottom-center' />
      {children}
    </>
  )
}
