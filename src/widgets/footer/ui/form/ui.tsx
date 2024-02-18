import { UiTextField } from '@/shared/ui'
import { ArrowRight } from 'lucide-react'

export const Form = () => {
	return (
		<UiTextField
			variant="standard"
			placeholder="Ваш email для акций и предложений"
			className="max-w-72"
			trailingIcon={
				<ArrowRight
					width={20}
					height={20}
					className="stroke-zinc-500"
				/>
			}
		/>
	)
}
