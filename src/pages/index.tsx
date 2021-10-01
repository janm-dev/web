import {
	FeaturedContent,
	FeaturedContentInfo
} from "../components/FeaturedContent"
import { GetStaticProps, NextPage } from "next"
import matter from "gray-matter"
import fs from "fs/promises"
import Head from "next/head"
import styles from "../styles/index.module.scss"

export const getStaticProps: GetStaticProps = async () => {
	const files = await fs.readdir("content/featured")
	const featured = await Promise.all(
		files.map(async (file) => ({
			id: file,
			data: matter(await fs.readFile(`content/featured/${file}`))
		}))
	)

	const featuredContent = await Promise.all(
		featured.map(async ({ id, data: { data, content } }) => {
			if (!/^https?:\/\//giu.test(data.icon)) {
				return {
					id,
					title: data.title,
					description: content,
					icon: data.icon
				}
			}

			const icon = await fetch(data.icon, { mode: "cors" })

			return {
				id,
				title: data.title,
				description: content,
				icon: `data:${icon.headers.get(
					"Content-Type"
				)};base64,${Buffer.from(await icon.arrayBuffer()).toString(
					"base64"
				)}`
			}
		})
	)

	return {
		props: {
			navItems: [],
			featuredContent
		},
		revalidate: false
	}
}

const Home: NextPage<{
	featuredContent: FeaturedContentInfo[]
}> = ({ featuredContent }) => {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_NAME}</title>
			</Head>

			<main className={styles.container}>
				{featuredContent.map(
					(featuredContentInfo: FeaturedContentInfo) => (
						<FeaturedContent
							key={featuredContentInfo.id}
							{...featuredContentInfo}
						/>
					)
				)}
			</main>
		</>
	)
}

export default Home
