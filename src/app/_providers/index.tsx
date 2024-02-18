import { ReactNode } from 'react'

import { WithQueryProvider } from '@/app/_providers/with-query'
import { WithToastProvider } from '@/app/_providers/with-toast'

export const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <WithQueryProvider>
        <WithToastProvider>{children}</WithToastProvider>
      </WithQueryProvider>
    </>
  )
}
