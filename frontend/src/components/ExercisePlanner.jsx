import React, { useState } from "react";
import InputForm from "./InputForm";

export default function App() {
	const [response, setResponse] = useState(null);

	if (response) {
		return "add output table component here";
	}

    // return form by default
	return <InputForm setResponse={setResponse} />;
}
