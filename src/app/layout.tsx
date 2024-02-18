import { ReactNode } from 'react'

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
    <html lang="ru">
      <body>
        <Provider>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
