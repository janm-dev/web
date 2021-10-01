import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import styles from "../styles/error.module.scss"

const NotFound: NextPage = () => {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_NAME}</title>
			</Head>

			<main className={styles.container}>
				<h1>404 Not Found</h1>
				<p>The requested page could not be found.</p>
				<b>
					Check the spelling of the URL, or{" "}
					<Link href="/">
						<a>go back to the homepage</a>
					</Link>
					.
				</b>
			</main>
		</>
	)
}

export default NotFound
