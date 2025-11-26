async function apiRequest(endpoint, data = null, includeCreds = false) {
	const res = await fetch("/api" + endpoint, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: data ? JSON.stringify(data) : null,
		credentials: includeCreds ? "include" : "same-origin",
	});

	if (!res.ok) {
		throw new Error(`${endpoint} failed. Status: ${res.status}`);
	}

	return res.json();
}

export const login = (username, password) =>
	apiRequest("/login", { username, password }, true);

export const register = (username, password) =>
	apiRequest("/register", { username, password });

export const getExercisePlan = (formData) =>
	apiRequest("/get-exercise-plan", formData);

export const analyze = (imageData) =>
	apiRequest("/analyze", { image: imageData });
