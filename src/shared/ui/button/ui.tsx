import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type TButtonVariant = 'contained' | 'text' | 'outlined'
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: TButtonVariant
}

export const Button = ({
	variant = 'text',
	className,
	children,
	...props
}: IButtonProps) => {
	return (
		<button
			className={clsx(
				'h-10 cursor-pointer flex gap-2 items-center justify-center',
				className,
				{
					contained:
						'text-white bg-black border border-black rounded-[4px] disabled:opacity-50 px-4',
					text: 'text-black',
					outlined:
						'text-black bg-white border border-black rounded-[4px] disabled:opacity-50 px-4',
				}[variant],
			)}
			{...props}
		>
			{children}
		</button>
	)
}
