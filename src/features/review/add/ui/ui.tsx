import { FC, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { useReviewStore } from '../model'
import { useAddReviewMutation } from '@/entities/product'
import { IAddReviewDto } from '@/shared/api/services/product'
import { UiButton, UiRating, UiTextArea, UiTextField } from '@/shared/ui'

export const AddReviewForm: FC<{ sku: number }> = ({ sku }) => {
	const { fields, setFields } = useReviewStore()
	const { register, handleSubmit, reset, control } = useForm<IAddReviewDto>({
		defaultValues: {
			email: fields.email,
			name: fields.name,
		},
	})
	const { mutate } = useAddReviewMutation()
	const [isChecked, setIsCheked] = useState(false)

	const onHandleSubmit: SubmitHandler<IAddReviewDto> = data => {
		mutate({
			sku,
			body: {
				name: data.name,
				email: data.email,
				rating: data.rating,
				review: data.review,
			},
		})

		if (isChecked) {
			setFields({ email: data.email, name: data.name })
		}

		reset()
	}

	return (
		<form
			className="flex flex-col gap-12"
			onSubmit={handleSubmit(onHandleSubmit)}
		>
			<UiTextArea
				rows={5}
				cols={30}
				placeholder="Отзыв*"
				{...register('review', { required: true })}
			/>
			<UiTextField
				variant="standard"
				placeholder="Ваше имя*"
				{...register('name', { required: true })}
			/>
			<UiTextField
				variant="standard"
				placeholder="Ваш email*"
				{...register('email', { required: true })}
			/>
			<div className="flex items-center gap-2">
				<input
					type="checkbox"
					checked={isChecked}
					onChange={() => setIsCheked(!isChecked)}
				/>
				<div className="text-sm text-zinc-500">
					Сохранить данные для следующих отзывов
				</div>
			</div>
			<div className="flex flex-col gap-3.5">
				<div className="text-sm text-zinc-500">Рейтинг*</div>
				<Controller
					control={control}
					name="rating"
					defaultValue={5}
					rules={{ required: true }}
					render={({ field: { value, onChange } }) => (
						<UiRating
							value={value}
							onChange={onChange}
							isEdit={true}
						/>
					)}
				/>
			</div>
			<UiButton
				variant="contained"
				className="font-bold max-w-32"
				type="submit"
			>
				Отправить
			</UiButton>
		</form>
	)
}
