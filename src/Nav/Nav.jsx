import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItemsStyle = `mx-8`

const Nav = () => {
	/* 	const [requestParams, setRequestParams] = useState({
		country: 'us',
	}) */
	return (
		<header>
			<nav className="flex justify-between my-6">
				<ul className="flex">
					<li className={navItemsStyle}>
						<Link to="/topnews/us">Top News</Link>
					</li>
					<li className={navItemsStyle}>
						<Link to="/categories">Categories</Link>
					</li>
					<li className={navItemsStyle}>
						<Link to="/search">Search</Link>
					</li>
				</ul>
				<ul className="flex">
					<li className={navItemsStyle}>
						<Link to="/topnews/gb">GB</Link>
					</li>
					<li className={navItemsStyle}>
						<Link to="/topnews/us">US</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Nav
