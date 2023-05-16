import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Article = ({ id, title, img, desc }) => {
	return (
		<div className="flex flex-col border-solid border-2 rounded-md m-5">
			<h1>{title}</h1>
			<img
				src={img}
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
				<span>More</span>
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
