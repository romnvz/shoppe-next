'use client'

import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

const Toaster = dynamic(
  async () => {
    const { Toaster } = await import('react-hot-toast')
    return Toaster
  },
  {
    ssr: false,
  },
)

export const WithToastProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster position="bottom-center" />
      {children}
    </>
  )
}
