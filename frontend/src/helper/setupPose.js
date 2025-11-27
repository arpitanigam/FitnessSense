import { createOnResults } from "./poseHandlers";

export function setupPose({
	videoElement,
	canvasElement,
	setCapturedImage,
	sendToBackend,
	imageCapturedRef,
}) {
	const onResults = createOnResults({
		canvasElement,
		setCapturedImage,
		sendToBackend,
		imageCapturedRef,
	});

	const pose = new window.Pose({
		locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
	});

	pose.setOptions({
		modelComplexity: 1,
		smoothLandmarks: true,
		enableSegmentation: false,
		minDetectionConfidence: 0.5,
		minTrackingConfidence: 0.5,
	});

	pose.onResults(onResults);

	const camera = new window.Camera(videoElement, {
		onFrame: async () => await pose.send({ image: videoElement }),
		width: 640,
		height: 480,
	});

	camera.start();
}
