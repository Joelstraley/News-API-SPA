import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import fetchByCountry from '../APIs/fetchByCountry'

import ArticleContainer from '../Article/ArticleContainer'

const MainContainer = () => {
	const [requestParams, setRequestParams] = useState({
		country: 'us',
	})

	const results = useQuery(['search', requestParams], fetchByCountry)
	/* const articles = results?.data ?? [] */

	console.log('MAIN', results)

	return <main>{/* 	<ArticleContainer articles={articles} /> */}</main>
}

export default MainContainer
