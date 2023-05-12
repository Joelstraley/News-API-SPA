/* import { createRoot } from 'react-dom/client' */
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'

import MainContainer from './Main/MainContainer'
import SearchParams from './Search/SearchParams'

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
					<Routes>
						<Route
							path="/"
							element={<MainContainer />}
						/>
					</Routes>
				</QueryClientProvider>
			</BrowserRouter>
		</>
	)
}

export default App
