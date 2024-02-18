import Link from 'next/link'

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export const Links = () => {
	return (
		<ul className="flex items-center gap-6">
			<Link href="http://linkedin.com">
				<Linkedin
					width={20}
					height={20}
					className="stroke-none fill-zinc-500"
				/>
			</Link>
			<Link href="http://facebook.com">
				<Facebook
					width={20}
					height={20}
					className="stroke-none fill-zinc-500"
				/>
			</Link>
			<Link href="http://instagram.com">
				<Instagram
					width={20}
					height={20}
					className="stroke-zinc-500"
				/>
			</Link>
			<Link href="http://twitter.com">
				<Twitter
					width={20}
					height={20}
					className="stroke-none fill-zinc-500"
				/>
			</Link>
		</ul>
	)
}
