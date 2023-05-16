/* import { createRoot } from 'react-dom/client' */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'

import Nav from './Nav/Nav'
import TopNews from './topNews/topNews'
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
							path="/categories"
							element={<Categories />}
						/>
						<Route
							path="/search"
							element={<Search />}
						/>
						<Route
							path="/news/:id"
							element={<Details />}
						/>
						{['/', '/topnews/:country', '*'].map((path, index) => (
							<Route
								key={index}
								path={path}
								element={<TopNews />}
							/>
						))}
					</Routes>
					<ReactQueryDevtools />
				</QueryClientProvider>
			</BrowserRouter>
		</>
	)
}

export default App
