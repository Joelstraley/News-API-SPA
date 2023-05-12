/* import { createRoot } from 'react-dom/client' */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'

import Nav from './Nav/Nav'
import MainContainer from './Main/MainContainer'
import TopNews from './TopNews/TopNews'
import Categories from './Categories/Categories'
import Search from './Search/Search'
import Details from './Details/Details'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			cacheTime: Infinity,
		},
	},
})

function App() {
	return (
		<>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<Nav />
					<Routes>
						<Route
							path="/topnews/:country"
							element={<TopNews />}
						/>
						<Route
							path="/categories/"
							element={<Categories />}
						/>
						<Route
							path="/search/"
							element={<Search />}
						/>
						<Route
							path="/news/:id"
							element={<Details />}
						/>
						<Route
							path="/"
							element={<TopNews />}
						/>
					</Routes>
				</QueryClientProvider>
			</BrowserRouter>
		</>
	)
}

export default App
