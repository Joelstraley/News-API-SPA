import PropTypes from 'prop-types'

import ArticleContainer from '../Article/ArticleContainer'

const MainContainer = ({ articles, country }) => {
	return (
		<>
			<h1 className="ms-3.5 news-title">
				&#8226;Top News stories from{' '}
				{country === 'us' ? 'the United States' : 'Great Britain'}
			</h1>
			<ArticleContainer articles={articles} />
		</>
	)
}

MainContainer.propTypes = {
	articles: PropTypes.array,
	country: PropTypes.string,
}

export default MainContainer
