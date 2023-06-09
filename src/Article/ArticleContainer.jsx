import PropTypes from 'prop-types'
import Article from './Article'

const ArticleContainer = ({ articles }) => {
	return (
		<main className="grid md:grid-cols-3 gap-2">
			{!articles.length ? (
				<h1>No Articles Found</h1>
			) : (
				articles.map((article, index) => (
					<Article
						id={index}
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
	articles: PropTypes.array,
}

export default ArticleContainer
