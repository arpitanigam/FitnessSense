import { useEffect, useRef, useState } from "react";
import styles from "../styles/FitSense.module.css";
import { loadMediaPipe } from "../helper/loadMediaPipe";
import { analyze } from "../helper/api";
import { setupPose } from "../helper/setupPose";

import Button from "./ui/Button";
import ReactMarkdown from "react-markdown";

export default function FitSense() {
	const videoRef = useRef(null);
	const canvasRef = useRef(null);
	const imageCapturedRef = useRef(false);

	const [analysis, setAnalysis] = useState(null);
	const [capturedImage, setCapturedImage] = useState(null);
	const [showAnalysis, setShowAnalysis] = useState(false);

	useEffect(() => {
		const init = async () => {
			await loadMediaPipe();

			if (videoRef.current) {
				videoRef.current.width = 640;
				videoRef.current.height = 480;
			}
			if (canvasRef.current) {
				canvasRef.current.width = 640;
				canvasRef.current.height = 480;
			}

			setupPose({
				videoElement: videoRef.current,
				canvasElement: canvasRef.current,
				setCapturedImage,
				sendToBackend,
				imageCapturedRef,
			});
		};

		const sendToBackend = async (imageData) => {
			try {
				const result = await analyze(imageData);
				setAnalysis(result);
			} catch (error) {
				console.error("Error sending image to backend:", error);
			}
		};

		init();
	}, []);

	const redoCapture = () => {
		setCapturedImage(null);
		setAnalysis(null);
		imageCapturedRef.current = false;
	};

	return (
		<div className={styles.container}>
			<h1>FitSense</h1>

			<div className={styles.videoWrapper}>
				<video ref={videoRef} className={styles.video} playsInline></video>
				<canvas ref={canvasRef} className={styles.canvas}></canvas>
			</div>

			{capturedImage && (
				<div className={styles.preview}>
					<h2>Captured Image</h2>
					<img src={capturedImage} />
					<div className={styles.buttonGroup}>
						<Button onClick={redoCapture}>Redo</Button>
						<Button onClick={() => setShowAnalysis(true)}>Analyse</Button>
					</div>
				</div>
			)}

			{analysis && showAnalysis && (
				<div className={styles.analysis}>
					<h2>Analysis Result</h2>
					<ReactMarkdown>{analysis.message}</ReactMarkdown>
					<h3>Score: {analysis.score}</h3>
				</div>
			)}
		</div>
	);
}
