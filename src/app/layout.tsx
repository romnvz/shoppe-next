import { ReactNode, Suspense } from 'react'
import { Toaster } from 'react-hot-toast'

import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { Provider } from './_providers'
import '@/shared/styles/index.css'

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html
			lang="ru"
			className="h-full"
		>
			<body className="min-h-screen flex flex-col">
				<Provider>
					<Header />
					<Suspense fallback={<>Loading..</>}>
						<main className="flex-1">{children}</main>
					</Suspense>
					<Toaster position="bottom-center" />
					<Footer />
				</Provider>
			</body>
		</html>
	)
}
