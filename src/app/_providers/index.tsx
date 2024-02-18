import { ReactNode } from 'react'

import { WithQueryProvider } from '@/app/_providers/with-query'

export const Provider = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<WithQueryProvider>{children}</WithQueryProvider>
		</>
	)
}
