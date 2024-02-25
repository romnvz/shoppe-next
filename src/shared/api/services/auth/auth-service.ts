import { AxiosError } from 'axios'

import { httpClient } from '@/shared/api'
import { IRequestLoginBody, IRequestRegisterBody, ISession } from './types'

export class AuthService {
	static async register(body: IRequestRegisterBody) {
		try {
			const { data } = await httpClient.post<ISession>('/auth/register', {
				...body,
			})

			return data
		} catch (err) {
			if (err instanceof AxiosError) {
				throw new Error(err.message)
			}
		}
	}

	static async login(body: IRequestLoginBody) {
		try {
			const { data } = await httpClient.post<ISession>('/auth/login', {
				...body,
			})

			return data
		} catch (err) {
			if (err instanceof AxiosError) {
				throw new Error(err.message)
			}
		}
	}
}
