import { useParams, Link } from 'react-router-dom'

const Nav = () => {
	let { country } = useParams()

	if (!country) {
		country = Intl.DateTimeFormat()
			.resolvedOptions()
			.timeZone.startsWith('America/')
			? 'us'
			: 'gb'
	}

	let navItemsStyleLeft = `mx-4`
	let navItemsStyleGB = country === 'gb' ? `nav--active-location` : ''
	let navItemsStyleUS = country === 'us' ? `nav--active-location` : ''

	return (
		<header>
			<h1 className="title mt-2">The Official News API SPA</h1>
			<nav className="flex justify-between my-6 bg-white text-zinc-950">
				<ul className="flex">
					<li className={navItemsStyleLeft}>
						<Link to={`/topnews/${country}`}>Top News</Link>
					</li>
					<li className={navItemsStyleLeft}>
						<Link
							to="/categories"
							state={{
								country: `${country}`,
							}}>
							Categories
						</Link>
					</li>
					<li className={navItemsStyleLeft}>
						<Link to="/search">Search</Link>
					</li>
				</ul>
				<ul className="flex px-4">
					<li className={navItemsStyleGB}>
						<Link to="/topnews/gb">GB</Link>
					</li>
					<li className={navItemsStyleUS}>
						<Link to="/topnews/us">US</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Nav
