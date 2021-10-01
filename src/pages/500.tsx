import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import styles from "../styles/error.module.scss"

const ServerError: NextPage = () => {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_NAME}</title>
			</Head>

			<main className={styles.container}>
				<h1>500 Internal Server Error</h1>
				<p>There was a server error while processing the request.</p>
				<b>
					Try again in a few minutes, or{" "}
					<Link href="/">
						<a>go back to the homepage</a>
					</Link>
					.
				</b>
			</main>
		</>
	)
}

export default ServerError
