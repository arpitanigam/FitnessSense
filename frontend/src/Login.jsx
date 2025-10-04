import { useState } from "react";
import { login, register } from "./helper/api";

export default function Login({ setUser }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e, action) => {
		e.preventDefault();
		try {
			if (action === "login") {
				const data = await login(username, password);
				setUser(data);
			} else if (action === "register") {
				await register(username, password);
				const data = await login(username, password);
				setUser(data);
			}
		} catch (err) {
			// Add error handling
		}
	};

	return (
		
		<div className="page">
				<h1 className="brand">FitSense</h1>
			<div className="title">Login or Register</div>

			<form className="form">
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<div className="form-buttons">
					<button type="submit" onClick={(e) => handleSubmit(e, "login")}>
					  Login
					</button>
					<button type="submit" onClick={(e) => handleSubmit(e, "register")}>
						Register
					</button>
				</div>
			</form>
		</div>
	);
}
