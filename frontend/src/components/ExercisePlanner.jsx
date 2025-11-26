import React, { useState } from "react";
import InputForm from "./InputForm";
import Heading from "./Heading";
import "../styles/ExercisePlanner.css"
import ExerciseTable from "./ExerciseTable";

export default function ExercisePlanner() {
	const [response, setResponse] = useState(null);

	if (response) {
		return (
			<div className="exercisePlannerdiv">
				<Heading />
				<ExerciseTable exercises={response} />
			</div>
		);
	}

	// return form by default
	return <InputForm setResponse={setResponse} />;
}
