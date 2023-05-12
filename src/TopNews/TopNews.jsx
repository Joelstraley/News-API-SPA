import { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import fetchByCountry from '../APIs/fetchByCountry'
import MainContainer from '../Main/MainContainer'

const TopNews = () => {
/* 	let statedCountry = country ? country : 'us' */

	/* 	const [requestParams, setRequestParams] = useState({
		country: statedCountry,
	}) */
	const { country } = useParams()
	const results = useQuery(
		['country', country],
		fetchByCountry
	)
	const articles = results?.data.articles ?? []

	/* const [requestParams, setRequestParams] = useState({
		country: 'us',
	}) 

	const results = useQuery(['search', requestParams], fetchByCountry)
	const articles = results?.data.articles ?? []
	console.log('Main-res', results)
	*/

	if (results.isLoading) {
		return (
			<div>
				<h2>🌀</h2>
			</div>
		)
	}

	console.log('Top', results)
	return (
		<>
			<MainContainer
				country={requestParams.country}
				articles={articles}
			/>
		</>
	)
}

TopNews.propTypes = {
	country: PropTypes.string,
}

export default TopNews
