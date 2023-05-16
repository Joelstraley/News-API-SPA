import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

const Details = () => {
	const location = useLocation()
	const { id, title, img, desc } = location.state

	return (
		<div key={id}>
			<h1>{title}</h1>
			<img
				src={img}
				alt={title}
			/>
			<p>{desc}</p>
		</div>
	)
}

Details.propTypes = {
	props: PropTypes.object,
}

export default Details
