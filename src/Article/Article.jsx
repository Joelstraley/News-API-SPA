import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import DefaultImage from '../assets/default-images/default-news.jpg'

const Article = ({ id, title, img, desc }) => {
	const image = img ? img : `${DefaultImage}`
	const headline = title.substring(0, title.indexOf('-'))

	return (
		<div className="flex flex-col border-solid border-2 rounded-md m-5 backgroundBlur">
			<h1>{headline}</h1>
			<img
				src={image}
				alt={headline}
				className="mx-auto"
			/>
			<p>{desc}</p>
			<Link
				to={{
					pathname: `/news/${id}`,
				}}
				state={{
					id: `${id}`,
					title: `${title}`,
					img: `${img}`,
					desc: `${desc}`,
				}}>
				<span className="article--link">More</span>
			</Link>
		</div>
	)
}

Article.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	img: PropTypes.string,
	desc: PropTypes.string,
}

export default Article
