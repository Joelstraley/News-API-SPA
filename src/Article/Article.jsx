import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Article = ({ title, img, desc }) => {
	return (
		<div className="">
			<h1>{title}</h1>
			<img src={img} />
			<p>{desc}</p>
			<Link to={`/details/`}>
				<p>More</p>
			</Link>
			{/* link */}
		</div>
	)
}

Article.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
	desc: PropTypes.string,
}

export default Article
