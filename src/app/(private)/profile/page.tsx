import { Metadata } from 'next'

import { ProfileView } from '@/views/profile'

export const metadata: Metadata = {
	title: 'Личный кабинет – Jwrly',
}

const Profile = () => <ProfileView />

export default Profile
