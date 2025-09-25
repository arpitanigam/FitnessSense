import { useState } from "react";
import Login from "./Login.jsx";
import "./styles/App.css";

export default function App() {
	const [user, setUser] = useState(null);

	if (!user) {
		return <Login setUser={setUser} />;
	} else {
		return (
			<div>
				<h1>Hello, {user.username}!</h1>
			</div>
		);
	}
}
