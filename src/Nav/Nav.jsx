import { useParams, Link } from 'react-router-dom'

const navItemsStyleLeft = `mx-4`

const navItemsStyleRight = ``

const Nav = () => {
	/* 	const [requestParams, setRequestParams] = useState({
		country: 'us',
	}) */
	const { country } = useParams()

	console.log('NAV- country', country)

	return (
		<header>
			<nav className="flex justify-between my-6 bg-white text-zinc-950">
				<ul className="flex">
					<li className={navItemsStyleLeft}>
						<Link to="/topnews/us">Top News</Link>
					</li>
					<li className={navItemsStyleLeft}>
						<Link to="/categories">Categories</Link>
					</li>
					<li className={navItemsStyleLeft}>
						<Link to="/search">Search</Link>
					</li>
				</ul>
				<ul className="flex px-4">
					<li className={navItemsStyleRight}>
						<Link to="/topnews/gb">GB</Link>
					</li>
					<li className={navItemsStyleRight}>
						<Link to="/topnews/us">US</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Nav
