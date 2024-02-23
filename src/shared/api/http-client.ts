import { useSessionStore } from '@/entities/session/model'
import axios from 'axios'

export const httpClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	headers: {
		'Content-type': 'application/json',
	},
})

httpClient.interceptors.request.use(req => {
	req.headers.authorization = `Bearer ${useSessionStore.getState().accessToken}`
	return req
})
