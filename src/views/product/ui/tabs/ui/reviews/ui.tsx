import { UiRating } from '@/shared/ui'
import { IProduct } from '@/shared/api/services/product'
import { AddReviewForm } from '@/features/review/add'

export const Reviews = ({ product }: { product: IProduct }) => {
	return (
		<div
			className="flex flex-col-reverse md:flex-row gap-16"
			id="reviews"
		>
			<div className="flex flex-col gap-12 w-full md:w-1/2">
				{product.reviews?.map((review, index) => (
					<div
						className="flex flex-col gap-6"
						key={index}
					>
						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-4">
								<div className="text-xl">{review.name}</div>
								<div className="text-sm text-zinc-500">
									{new Date(review.date).toLocaleDateString('ru')}
								</div>
							</div>
							<div className="flex">
								<UiRating
									value={review.rating}
									isEdit={false}
								/>
							</div>
						</div>
						<div className="text-base text-zinc-500">{review.description}</div>
					</div>
				))}
			</div>
			<div className="flex flex-col w-full md:w-1/2">
				<div className="flex flex-col gap-2.5 mb-6">
					<div className="text-xl">Добавить отзыв</div>
					<div className="text-sm text-zinc-500">
						Ваш email не будет опубликован. Обязательные поля помечены *
					</div>
				</div>
				<AddReviewForm sku={product.sku} />
			</div>
		</div>
	)
}
