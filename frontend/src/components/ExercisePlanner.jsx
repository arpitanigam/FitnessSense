import React, { useState } from "react";
import InputForm from "./InputForm";
import Heading from "./Heading";
import "../styles/ExercisePlanner.css"
import ExerciseTable from "./ExerciseTable";

export default function ExercisePlanner() {
	const [response, setResponse] = useState(null);
	let exercises=[{
  exercise_name: "exercise1",
  number_of_sets: 123,
  number_of_reps: 123,
  video_link: "youtube.com/example",
  day: "exampleDay"
},
{exercise_name: "exercise1",
  number_of_sets: 123,
  number_of_reps: 123,
  video_link: "youtube.com/example",
  day: "exampleDay"
},{exercise_name: "exercise1",
  number_of_sets: 123,
  number_of_reps: 123,
  video_link: "youtube.com/example",
  day: "exampleDay"}
];

	// if (response) {
		return <div className="exercisePlannerdiv">
			<Heading/>
			<ExerciseTable exercises={exercises}/>
		</div>;
	//}

    // return form by default
	//return <InputForm setResponse={setResponse} />;
}
