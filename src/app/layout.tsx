import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { WithToastProvider } from './_providers/with-toast'
import './_styles/index.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        <WithToastProvider>
          <Header />
          {children}
          <Footer />
        </WithToastProvider>
      </body>
    </html>
  )
}
