import Article from './Article'
import PropTypes from 'prop-types'

const ArticleContainer = ({ articles }) => {
	console.log('ArticlCon', articles)
	return (
		<main className="grid grid-cols-3 gap-4">
			{!articles.length ? (
				<h1>No Articles Found</h1>
			) : (
				articles.map((article) => (
					<Article
						title={article.title}
						img={article.urlToImage}
						desc={article.content}
						key={article.title}
					/>
				))
			)}
		</main>
	)
}

ArticleContainer.propTypes = {
	articles: PropTypes.object,
}

export default ArticleContainer
