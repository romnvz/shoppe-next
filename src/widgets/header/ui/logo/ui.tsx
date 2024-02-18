import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
	return (
		<Link
			href={'/'}
			className="relative w-24 h-7 md:w-32 md:h-7"
		>
			<Image
				src="/logo.svg"
				fill
				alt="JWRLY Logo"
			/>
		</Link>
	)
}
