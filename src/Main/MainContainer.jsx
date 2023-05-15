import PropTypes from 'prop-types'

import ArticleContainer from '../Article/ArticleContainer'

const MainContainer = ({ articles, country }) => {
	/* 	const [requestParams, setRequestParams] = useState({
		country: 'us',
	})

	const results = useQuery(['search', requestParams], fetchByCountry)
	const articles = results?.data.articles ?? []
	console.log('Main-res', results) */

	return (
		<>
			<h1 className="ms-3.5">&#8226;Top News stories from {country}</h1>
			<ArticleContainer articles={articles} />
		</>
	)
}

MainContainer.propTypes = {
	articles: PropTypes.array,
	country: PropTypes.string,
}

export default MainContainer
