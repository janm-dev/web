import buildData from "../version.preval"
import Link from "next/link"
import Logo from "../../public/logo.svg"
import styles from "../styles/Footer.module.scss"

export const Footer = () => (
	<footer className={styles.footer}>
		<span className={styles.copy}>
			© {buildData.year} janm.dev
		</span>

		<div className={styles.buildinfo}>
			<Link href="/">
				<a className={styles.buildlogo}>
					<Logo className={styles.buildlogo} />
				</a>
			</Link>
			<span className={styles.build}>{buildData.build}</span>
		</div>

		<Link href="/github">
			<a className={styles.github}>GitHub</a>
		</Link>

		<Link href="/discord">
			<a className={styles.discord}>Discord</a>
		</Link>

		<Link href="/">
			<a className={styles.logo}>
				<Logo />
			</a>
		</Link>

		<Link href="/contact">
			<a className={styles.contact}>contact</a>
		</Link>

		<Link href="/legal">
			<a className={styles.legal}>legal</a>
		</Link>

		<span className={styles.version}>
			{buildData.environment}-{buildData.build}
		</span>
	</footer>
)
