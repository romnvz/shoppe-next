'use client'

import { useRegisterMutation } from '@/entities/session'
import { IRequestRegisterBody } from '@/shared/api/services/auth'
import { UiButton, UiTextField } from '@/shared/ui'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'

export const RegisterView = () => {
	const { register, handleSubmit } = useForm<IRequestRegisterBody>()
	const { mutate } = useRegisterMutation()

	const onHanldeSubmit: SubmitHandler<IRequestRegisterBody> = body => {
		mutate({
			email: body.email,
			password: body.password,
			name: body.name,
		})
	}

	return (
		<div className="container mx-auto max-w-7xl px-5 flex-col gap-6 lg:gap-16 lg:mt-8">
			<div className="max-w-[450px] mx-auto">
				<h1 className="text-3xl mb-20 mt-20 text-center">Регистрация</h1>
				<form
					className="flex flex-col gap-20"
					onSubmit={handleSubmit(onHanldeSubmit)}
				>
					<div className="flex flex-col gap-12">
						<UiTextField
							variant="standard"
							placeholder="Email"
							{...register('email')}
						/>
						<UiTextField
							variant="standard"
							placeholder="Имя"
							{...register('name')}
						/>
						<UiTextField
							variant="standard"
							placeholder="Пароль"
							{...register('password')}
						/>
					</div>
					<div className="flex flex-col gap-3.5 items-center">
						<UiButton
							variant="contained"
							className="w-full"
							type="submit"
						>
							Вход
						</UiButton>
						<Link href="reset-password">Забыли пароль?</Link>
					</div>
				</form>
			</div>
		</div>
	)
}
