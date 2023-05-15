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
	/* 	const { country } = useParams() */

	/* 	let country = Intl.DateTimeFormat()
		.resolvedOptions()
		.timeZone.startsWith('America/')
		? 'us'
		: 'gb' */
	const { country } = useParams()

	const results = useQuery({
		queryKey: ['country', country],
		queryFn: fetchByCountry,
	})

	/* const [requestParams, setRequestParams] = useState({
		country: 'us',
	}) */

	/* 	const results = useQuery(['search', requestParams], fetchByCountry) */
	console.log('willie', results)
	const articles = results?.data?.articles ?? []

	console.log('Main-res', results.data)

	if (results.isLoading) {
		return (
			<div>
				<img
					src="https://frinkiac.com/gif/S07E02/1004586/1006588.gif"
					alt="spinning newspaper"
				/>
			</div>
		)
	}
	console.log('Top', results)
	return (
		<>
			<MainContainer
				country={country}
				articles={articles}
			/>
		</>
	)
}

TopNews.propTypes = {
	country: PropTypes.string,
}

export default TopNews
