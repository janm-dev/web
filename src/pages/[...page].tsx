import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import ReactMarkdown from "react-markdown"
import { readFile } from "fs/promises"
import remarkSlug from "remark-slug"
import remarkGfm from "remark-gfm"
import matter from "gray-matter"
import Head from "next/head"
import glob from "glob"
import styles from "../styles/page.module.scss"

export const getStaticPaths: GetStaticPaths = async () => {
	const files = glob.sync("content/pages/**/*.md")
	const pages = files.map((file) =>
		file
			.replace(/^content\/pages\//giu, "")
			.replace(/\.md$/giu, "")
			.split("/")
	)

	return {
		paths: pages.map((page) => ({ params: { page } })),
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const file = `content/pages/${(params?.page as string[]).join("/")}.md`

	const { data, content } = matter(await readFile(file))

	const headings = content
		.split(/\r?\n/giu)
		.map((line) => {
			const isHeader = /^###? /giu.test(line)
			const text = isHeader ? line.replace(/###?/giu, "").trim() : null
			const level = text?.startsWith("## ") ? 2 : 3
			const id = text?.toLowerCase().replace(/ /giu, "-") || null

			return isHeader ? { id, text, level } : null
		})
		.filter((heading) => heading !== null) as HeadingInfo[]

	return {
		props: {
			navItems: data.nav || [],
			title: data.title || process.env.NEXT_PUBLIC_NAME,
			headings,
			content
		},
		revalidate: false
	}
}

const Page: NextPage<PageProps> = ({ content, title, headings }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<main className={styles.container}>
				<ReactMarkdown
					remarkPlugins={[remarkGfm, remarkSlug]}
					className={styles.content}
				>
					{content}
				</ReactMarkdown>
			</main>
		</>
	)
}

interface PageProps {
	title: string
	content: string
	headings: HeadingInfo[]
}

interface HeadingInfo {
	id: string
	text: string
	level: 2 | 3
}

export default Page
