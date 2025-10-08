import { useState } from "react";
import Login from "./components/Login.jsx";
import NavBar from "./components/NavBar.jsx";
import "./styles/App.css";

export default function App() {
	const [user, setUser] = useState(null);
	const [activeNav, setActiveNav] = useState("dashboard");

	if (!user) {
		return <Login setUser={setUser} />;
	}

	let content;
	if (activeNav === "exercise planner") {
			content = <h1>Exercise Planner</h1>
		} else if (activeNav === "fitsense"){
			content = <h1>FitSense</h1>
		} else if (activeNav === "dashboard"){
			content = <h1>Dashboard</h1>
		}

	return (
		<div>
			<NavBar setActiveNav={setActiveNav}/>
			{content}
			<h1>Hello, {user}!</h1>
		</div>
	);
}
