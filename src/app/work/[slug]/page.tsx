import { notFound } from 'next/navigation'
import { CustomMDX } from '@/app/components/mdx'
import { formatDate, getPosts } from '@/app/utils'
import { AvatarGroup, Button, Flex, Heading, SmartImage, Text } from '@/once-ui/components'
import { baseURL, person } from '@/app/resources';


export async function generateStaticParams() {
	let posts = getPosts(['src', 'app', 'work', 'projects']);

	return posts.map((post) => ({
		slug: post.slug,
	}))
}

export function generateMetadata() {
		return

}

export default function Project() {
	
		notFound()

}