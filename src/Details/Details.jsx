import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

const Details = () => {
	const location = useLocation()
	const { id, title, img, desc } = location.state
	console.log('LOC', location)

	return (
		<div
			className="m-6"
			key={id}>
			<h1>{title}</h1>
			<img
				src={img}
				alt={title}
			/>
			<p>{desc}</p>
			<Link
				to={{
					pathname: `/`,
				}}>
				<p className='"mt-6'>{`< Back to List`}</p>
			</Link>
		</div>
	)
}

Details.propTypes = {
	props: PropTypes.object,
}

export default Details
