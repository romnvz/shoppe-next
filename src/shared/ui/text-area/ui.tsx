import { forwardRef, TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string
	rows: number
	cols: number
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
	({ className, cols, rows, ...props }, ref) => {
		return (
			<div className={clsx('relative w-full', className)}>
				<textarea
					className="block w-full bg-transparent border-b border-gray-300 text-gray-900 text-sm outline-none"
					ref={ref}
					rows={rows}
					cols={cols}
					{...props}
				/>
			</div>
		)
	},
)
