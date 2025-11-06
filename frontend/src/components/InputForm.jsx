import { useState } from "react";
import InputField from "./ui/InputField";
import Button from "./ui/Button";
import styles from "../styles/InputForm.module.css";
import inputFieldStyles from "../styles/ui/InputField.module.css";

export default function InputForm({ setResponse }) {
	const [clicked, setClicked] = useState(false);

	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");
	const [height, setHeight] = useState("");
	const [currentWeight, setCurrentWeight] = useState("");
	const [targetWeight, setTargetWeight] = useState("");
	const [activeDays, setActiveDays] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setClicked(true);

		try {
			const formData = JSON.stringify({
				age,
				gender,
				height,
				currentWeight,
				targetWeight,
				activeDays,
			});

			console.log(formData);

			const res = await fetch("http://localhost:8080/api/get-exercise-plan", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: formData,
			});

			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}

			const data = await res.json();
			setResponse(data.message);
		} catch (error) {
			console.error("Error sending request:", error);
			setResponse("Something went wrong!");
		}
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div className={styles.doubleInputContainer}>
				<InputField
					label="Age"
					name="age"
					type="number"
					value={age}
					onChange={(e) => setAge(e.target.value)}
					placeholder="Enter your age"
				/>
				<div className={styles.genderContainer}>
					<label htmlFor="gender">Gender</label>
					<select
						className={inputFieldStyles.input}
						name="gender"
						id="gender"
						value={gender}
						onChange={(e) => setGender(e.target.value)}
					>
						<option value="" disabled>
							Select Gender
						</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="preferNotSay">Prefer Not to Say</option>
					</select>
				</div>
			</div>

			<InputField
				label="Height"
				name="height"
				type="number"
				value={height}
				onChange={(e) => setHeight(e.target.value)}
				placeholder="Enter your height (cm)"
			/>

			<InputField
				label="Current Weight"
				name="currentWeight"
				type="number"
				value={currentWeight}
				onChange={(e) => setCurrentWeight(e.target.value)}
				placeholder="Enter your current weight (kg)"
			/>

			<InputField
				label="Target Weight"
				name="targetWeight"
				type="number"
				value={targetWeight}
				onChange={(e) => setTargetWeight(e.target.value)}
				placeholder="Enter your target weight (kg)"
			/>

			<InputField
				label="Active Days per Week"
				name="activeDays"
				type="number"
				value={activeDays}
				onChange={(e) => setActiveDays(e.target.value)}
				placeholder="Active days per week"
			/>

			<Button type="submit" disabled={clicked}>
				Submit
			</Button>
		</form>
	);
}
