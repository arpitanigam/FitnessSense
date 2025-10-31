export default function InputForm({setResponse}) {
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await fetch("http://localhost:8080/api/get-exercise-plan", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ data: "dummy-data" }),
			});

			const data = await res.json();
			setResponse(data.message);
		} catch (error) {
			console.error("Error sending request:", error);
			setResponse("Something went wrong!");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Dummy input" />
            <br/>
            <button type="submit">Submit</button>
		</form>
	);
}
