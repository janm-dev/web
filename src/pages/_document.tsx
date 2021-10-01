import Document, { Html, Head, Main, NextScript } from "next/document" // eslint-disable-line @next/next/no-document-import-in-page

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/logo.svg" type="image/svg+xml" />
					<link rel="icon" href="/logo.png" type="image/png" />
					<link rel="apple-touch-icon" href="/apple-icon.png" />
					<meta name="theme-color" content="#0b3fda" />
					<meta name="description" content="" />
					<link rel="manifest" href="/manifest.json" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Roboto+Mono&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
