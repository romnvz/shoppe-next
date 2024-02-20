import { Metadata } from 'next'

import { AboutView } from '@/views/about/ui'

export const metadata: Metadata = {
	title: 'Мы делаем шикарные украшения для вас',
	description:
		'Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis.',
}

const About = () => <AboutView />

export default About
