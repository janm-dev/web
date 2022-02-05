import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { AppProps } from "next/app"
import "../styles/fonts.scss"
import "../styles/global.scss"

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Header navItems={pageProps.navItems || []} />
		<Component {...pageProps} />
		<Footer />
	</>
)

export default App
