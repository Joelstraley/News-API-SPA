const apiKey = import.meta.env.VITE_MY_API_KEY

async function fetchBySearch({ queryKey }) {
	console.log('Search', queryKey)
	const searchTerm = queryKey[1]

	const res = await fetch(
		`https://newsapi.org/v2/top-headlines?` +
			`q=${searchTerm}&` +
			`apiKey=${apiKey}&sortBy=publishedAt`
	)

	/* const res = await fetch('https://dummyjson.com/products/1') */

	/* 	if (!res.ok) {
		throw new Error(`Sorry, we could not find the top stories fo ${searchTerm}`)
	} */
	console.log('search', res)

	return await res.json()
}

export default fetchBySearch
