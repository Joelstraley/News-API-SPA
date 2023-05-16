import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import ArticleContainer from '../Article/ArticleContainer'
import fetchBySearch from '../APIs/fetchBySearch'

const Search = () => {
	const [searchTerm, setSearchTerm] = useState('everything')

	const results = useQuery(['searchTerm', searchTerm], fetchBySearch)
	const articles = results?.data?.articles ?? []

	return (
		<div className="search-container">
			<label
				htmlFor="searchTerm"
				className="mr-2">
				<input
					className="text-slate-950 rounded-lg p-1 mr-2"
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
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</label>
			<ArticleContainer articles={articles} />
		</div>
	)
}

export default Search
