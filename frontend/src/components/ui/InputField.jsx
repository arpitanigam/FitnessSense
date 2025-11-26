import styles from "../../styles/ui/InputField.module.css";

export default function InputField({ label, name, type = "text", ...props }) {
	return (
		<div className={styles.inputContainer}>
			{label && <label htmlFor={name}>{label}</label>}
			<input
				className={styles.input}
				id={name}
				name={name}
				type={type}
				{...props}
			/>
		</div>
	);
}
