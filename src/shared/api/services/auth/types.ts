export interface ISession {
	accessToken: string
}

export interface IRequestRegisterBody {
	email: string
	name: string
	password: string
	phone?: string
	address?: string
}

export interface IRequestLoginBody {
	email: string
	password: string
}
