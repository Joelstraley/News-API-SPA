const apiKey = import.meta.env.VITE_MY_API_KEY

const fetchByCategory = async ({ queryKey }) => {
	console.log('CATEGO', queryKey)
	const country = queryKey[1]
	const category = queryKey[3]

	const res = await fetch(
		`https://newsapi.org/v2/top-headlines?` +
			`country=${country}&` +
			`category=${category}&` +
			`apiKey=${apiKey}`
	)

	if (!res.ok) {
		throw new Error(
			`Sorry, we could not find the top stories related to ${category}`
		)
	}

	return res.json()
}

export default fetchByCategory
