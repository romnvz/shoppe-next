import { useMutation } from '@tanstack/react-query'

import { AuthService, IRequestRegisterBody } from '@/shared/api/services/auth'
import { useSessionStore } from '../model'

export const useRegisterMutation = () => {
	return useMutation({
		mutationKey: ['session'],
		mutationFn: (body: IRequestRegisterBody) =>
			AuthService.register({ ...body }),
		onSuccess(data) {
			useSessionStore.getState().setAccessToken(data?.accessToken!)
		},
	})
}
