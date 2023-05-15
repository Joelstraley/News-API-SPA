import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import ArticleContainer from '../Article/ArticleContainer'
import fetchBySearch from '../APIs/fetchBySearch'

const Search = () => {
	/* const [requestParams, setRequestParams] = useState({
		searchTerm: '',
	}) */

	const [searchTerm, setSearchTerm] = useState('')

	const results = useQuery(['searchTerm', searchTerm], fetchBySearch)
	const articles = results?.data.articles ?? []

	return (
		<div className="search-container">
			<label htmlFor="searchTerm">
				Search
				<input
					name="search"
					id="search"
					placeholder="search..."
					onChange={(e) => {
						e.preventDefault(), setSearchTerm(e.target.value)
					}}
					onSubmit={(e) => {
						e.preventDefault(), setSearchTerm(e.target.value)
					}}
				/>
			</label>
			<ArticleContainer articles={articles} />
		</div>
	)
}

export default Search
