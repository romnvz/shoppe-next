import { Fragment } from 'react'
import { Star } from 'lucide-react'

import { UiButton } from '@/shared/ui'

interface IRatingProps {
	value: number
	onChange?: (value: number) => void
	isEdit: boolean
}

export const Rating = ({ value, onChange, isEdit }: IRatingProps) => {
	const EditableRating = [...Array(5)].map((star, index) => {
		index += 1
		return (
			<UiButton
				type="button"
				key={index}
				variant="text"
				className="h-7 w-7"
				onClick={() => onChange?.(index)}
			>
				<Star
					width={20}
					height={20}
					strokeWidth={1}
					className={index <= value ? 'fill-black' : ''}
				/>
			</UiButton>
		)
	})

	const NonEditableRating = [...Array(5)].map((star, index) => {
		index += 1
		return (
			<Fragment key={index}>
				<Star
					width={20}
					height={20}
					strokeWidth={1}
					className={index <= value ? 'fill-black' : ''}
				/>
			</Fragment>
		)
	})

	return (
		<div className="flex items-center gap-2.5">
			{isEdit ? EditableRating : NonEditableRating}
		</div>
	)
}
