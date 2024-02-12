'use client'

import { Form } from './form'
import { Links } from './links'
import { Nav } from './nav'

export const Footer = () => {
  /**
    toast.success('Ваш email подписан на новости и уведомления', {
      duration: 2000,
    })
 */

  return (
    <footer className="relative bottom-0 left-0 right-0 mt-12 md:mt-48">
      <div className="container mx-auto max-w-7xl p-5 md:mb-6 flex flex-col gap-6 md:before:border-t">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6">
          <Nav />
          <Form />
        </div>
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6">
          <div>&copy; 2024 Shoppe</div>
          <Links />
        </div>
      </div>
    </footer>
  )
}
