import preval from "next-plugin-preval"

async function getData() {
	return {
		year: new Date().getUTCFullYear(),
		build: Date.now().toString(36),
		environment:
			process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
			process.env.NODE_ENV ||
			"other"
	}
}

export default preval(getData())
