const apiKey = import.meta.env.VITE_MY_API_KEY

const fetchByCountry = async ({ queryKey }) => {
	const country = queryKey[1]

	const res = await fetch(
		`https://newsapi.org/v2/top-headlines?` +
			`country=${country}&` +
			`apiKey=${apiKey}`
	)

	if (!res.ok) {
		throw new Error(`Sorry, we could not find the top stories in ${country}`)
	}

	return res.json()
}

export default fetchByCountry
