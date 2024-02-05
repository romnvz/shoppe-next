import { Metadata } from 'next'

import { HomePage } from '@/views/home'
import { queryClient } from '@/shared/api'
import { ProductApi } from '@/entities/product'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

export const metadata: Metadata = {
  title: 'Shoppe | Главная',
}

const Home = async () => {
  const qc = queryClient
  await qc.prefetchQuery({
    queryKey: ['latest-products'],
    queryFn: () => ProductApi.getLatestProducts(),
  })

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <HomePage />
    </HydrationBoundary>
  )
}

export default Home
