import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import fetchByCountry from '../APIs/fetchByCountry'

import MainContainer from '../Main/MainContainer'

const TopNews = () => {
	let { country } = useParams()

	if (!country) {
		country = Intl.DateTimeFormat()
			.resolvedOptions()
			.timeZone.startsWith('America/')
			? 'us'
			: 'gb'
	}

	const results = useQuery({
		queryKey: ['country', country],
		queryFn: fetchByCountry,
	})

	const articles = results?.data?.articles ?? []

	if (results.isLoading) {
		return (
			<div className="mx-auto">
				<img
					src="https://frinkiac.com/gif/S07E02/1004586/1006588.gif"
					alt="spinning newspaper"
				/>
			</div>
		)
	}

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
