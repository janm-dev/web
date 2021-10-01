import Link from "next/link"
import Logo from "../../public/logo.svg"
import styles from "../styles/Header.module.scss"

export const Header = ({ navItems }: { navItems: NavItem[] }) => (
	<header className={styles.header}>
		<Link href="/">
			<a className={styles.link}>
				<Logo className={styles.logo} />
				<h1 className={styles.text}>{process.env.NEXT_PUBLIC_NAME}</h1>
			</a>
		</Link>

		<nav className={styles.nav}>
			{navItems.map(({ href, content }) => (
				<Link key={`${content} - ${href}`} href={href}>
					<a className={styles.navitem}>
						<h1 className={styles.navitem}>{content}</h1>
					</a>
				</Link>
			))}
		</nav>
	</header>
)

export interface NavItem {
	href: string
	content: string
}
