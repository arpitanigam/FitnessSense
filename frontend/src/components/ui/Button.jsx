import styles from "../../styles/ui/Button.module.css";

export default function Button({children, ...props}) {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	);
}
