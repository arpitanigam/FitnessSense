import { useState } from "react";
import { login, register } from "../helper/api";
import Button from "./ui/Button";
import InputField from "./ui/InputField";

import styles from "../styles/Login.module.css";

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
			<div className="container" style={{maxWidth : "420px"}}>
			<div className="brand">FitSense</div>
			<h2 className="title">Login or Register</h2>
			<form className="form">
				<InputField
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<InputField
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<div className={styles.formButtons}>
					<Button type="submit" onClick={(e) => handleSubmit(e, "login")}>
						Login
					</Button>
					<Button type="submit" onClick={(e) => handleSubmit(e, "register")}>
						Register
					</Button>
				</div>
			</form>
			</div>
		</div>
	);
}
