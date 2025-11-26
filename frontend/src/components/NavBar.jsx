export default function NavBar({ setActiveNav }) {
	const handleClick = (event, navItem) => {
		event.preventDefault();
		setActiveNav(navItem);
	};

	return (
		<nav>
			<ul>
				<li>
					<a href="#" onClick={(e) => handleClick(e, "dashboard")}>
						Dashboard
					</a>
				</li>
				<li>
					<a href="#" onClick={(e) => handleClick(e, "fitsense")}>
						FitSense
					</a>
				</li>
				<li>
					<a href="#" onClick={(e) => handleClick(e, "exercise planner")}>
						Exercise Planner
					</a>
				</li>
			</ul>
		</nav>
	);
}
