import { useLocation } from 'react-router-dom'
import Business from '../assets/category-images/Business.jpg'
import Entertainment from '../assets/category-images/Entertainment.jpg'
import General from '../assets/category-images/General.jpg'
import Health from '../assets/category-images/Health.jpg'
import Science from '../assets/category-images/Science.jpg'
import Sports from '../assets/category-images/Sports.jpg'
import Technology from '../assets/category-images/Technology.jpg'

const Categories = () => {
	const location = useLocation()
	const { country } = location.state

	/* businessentertainmentgeneralhealthsciencesportstechnology */

	let categories = [
		{
			title: 'Business',
			img: { Business },
		},
		{
			title: 'Entertainment',
			img: { Entertainment },
		},
		{
			title: 'General',
			img: { General },
		},
		{
			title: 'Health',
			img: { Health },
		},
		{
			title: 'Science',
			img: { Science },
		},
		{
			title: 'Sports',
			img: { Sports },
		},
		{
			title: 'Technology',
			img: { Technology },
		},
	]
	return categories.map((element, index) => {
		;<div
			className="flex flex-col border-solid border-2 rounded-md m-5"
			key={index}>
			<h1>{element.title}</h1>
			<img
				src={element.img}
				alt={element.title}
			/>
		</div>
	})
}

export default Categories
