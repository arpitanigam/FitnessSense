const API_BASE = "http://localhost:8080"; // change to the backend URL

export async function login(username, password) {
	const res = await fetch(`${API_BASE}/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username, password }),
		credentials: "include",
	});
	if (!res.ok) throw new Error("Login failed");
	return res.json();
}

export async function register(username, password) {
	const res = await fetch(`${API_BASE}/register`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username, password }),
	});
	if (!res.ok) throw new Error("Registration failed");
	return res.json();
}
