import { notFound } from 'next/navigation'
import { CustomMDX } from '@/app/components/mdx'
import { formatDate, getPosts } from '@/app/utils'
import { Avatar, Button, Flex, Heading, Text } from '@/once-ui/components'

import { person, baseURL } from '@/app/resources'



export async function generateStaticParams() {
	let posts = getPosts(['src', 'app', 'blog', 'posts'])

	return posts.map((post) => ({
		slug: post.slug,
	}))
}

export function generateMetadata() {
	let post = false

	return

}

export default function Blog() {
	let post = false

	notFound()

}