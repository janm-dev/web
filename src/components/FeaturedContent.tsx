import ReactMarkdown from "react-markdown"
import Image from "next/image"
import Link from "next/link"
import { Key } from "react"
import styles from "../styles/FeaturedContent.module.scss"

export const FeaturedContent = ({
	title,
	icon,
	description
}: FeaturedContentInfo) => (
	<section className={styles.featured}>
		<div className={styles.icon}>
			<Image
				src={icon}
				width={64}
				height={64}
				className={styles.icon}
				alt={`${title} icon`}
			/>
		</div>
		<h2 className={styles.title}>{title}</h2>
		<ReactMarkdown className={styles.description}>
			{description}
		</ReactMarkdown>
	</section>
)

export interface FeaturedContentInfo {
	id: Key
	title: string
	description: string
	icon: string
}
