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

// keep this commented out until backend is implemented
// export const analyze = (imageData) =>
// 	apiRequest("/analyze-squat", { image: imageData });

export const analyze = async (imageData) => {
	// simulate backend response with 5s delay
	await new Promise((resolve) => setTimeout(resolve, 5000));
	return {
		message: `
✅ What’s looking good:
-	Knee tracking: Knees seem to be following your toes — not caving in, which is great.
-	Back posture: You’ve got a pretty neutral spine; no dangerous rounding here.
-	Weight distribution: Heels look like they’re grounded (hard to tell exactly, but no major lean forward).


🛠️ What could use a little polish:
-	Chest up, proud: Your torso leans a bit forward (common in squats). Imagine showing off your logo on your chest — this helps keep your upper body more upright.
-	Arm position: Those “zombie arms” are fine for balance, but you could try holding them closer in or clasped for a cleaner form (and less shoulder tension).
			`,
		score: Math.floor(Math.random() * 40) + 60,
	};
};
