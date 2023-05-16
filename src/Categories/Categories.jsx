import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import fetchByCategory from '../APIs/fetchByCategory'

import MainContainer from '../Main/MainContainer'
import Business from '../assets/category-images/Business.jpg'
import Entertainment from '../assets/category-images/Entertainment.jpg'
import General from '../assets/category-images/General.jpg'
import Health from '../assets/category-images/Health.jpg'
import Science from '../assets/category-images/Science.jpg'
import Sports from '../assets/category-images/Sports.jpg'
import Technology from '../assets/category-images/Technology.jpg'

const Categories = () => {
	const [chosenCategory, setChosenCategory] = useState(null)
	const [articles, setArticles] = useState([])

	const location = useLocation()
	const { country } = location.state

	let results = useQuery({
		queryKey: ['country', country, 'category', chosenCategory],
		queryFn: fetchByCategory,
	})

	const handleClick = (e) => {
		setChosenCategory(e.target.value)
		setArticles(results?.data?.articles)
	}

	let categories = [
		{
			title: 'Business',
			img: `${Business}`,
		},
		{
			title: 'Entertainment',
			img: `${Entertainment}`,
		},
		{
			title: 'General',
			img: `${General}`,
		},
		{
			title: 'Health',
			img: `${Health}`,
		},
		{
			title: 'Science',
			img: `${Science}`,
		},
		{
			title: 'Sports',
			img: `${Sports}`,
		},
		{
			title: 'Technology',
			img: `${Technology}`,
		},
	]

	let categoryBlock = categories.map((element, index) => {
		return (
			<div
				className="flex flex-col border-solid border-2 rounded-md m-5 backgroundBlur"
				key={index}
				value={element.title}
				onClick={(e) => handleClick(e)}>
				<h1 className="p-2">{element.title}</h1>
				<img
					className="mx-auto"
					src={element.img}
					alt={element.title}
				/>
			</div>
		)
	})

	return (
		<>
			{chosenCategory === null ? (
				<main className="grid md:grid-cols-3 gap-2">{categoryBlock}</main>
			) : (
				<>
					<MainContainer
						country={country}
						articles={articles}
					/>
				</>
			)}
		</>
	)
}

export default Categories
