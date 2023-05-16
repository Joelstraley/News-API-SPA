import { Link, useLocation } from 'react-router-dom'

const Details = () => {
	const location = useLocation()
	const { id, title, img, desc } = location.state
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

export default Details
