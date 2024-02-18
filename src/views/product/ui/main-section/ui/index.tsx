import { IProduct } from '@/shared/api'
import { Gallery } from './gallery'
import { Info } from './info'

export const MainSection = ({ product }: { product: IProduct }) => {
	return (
		<div className="container mx-auto max-w-7xl px-5 flex lg:flex-row flex-col gap-6 lg:gap-16 lg:mt-8">
			<Gallery product={product} />
			<Info product={product} />
		</div>
	)
}
