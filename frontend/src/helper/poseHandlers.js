import { calcAngle } from "./calcAngle";

export function createOnResults({
	canvasElement,
	setCapturedImage,
	sendToBackend,
	imageCapturedRef,
}) {
	const ctx = canvasElement.getContext("2d");

	return (results) => {
		ctx.save();
		ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
		ctx.drawImage(
			results.image,
			0,
			0,
			canvasElement.width,
			canvasElement.height
		);

		if (results.poseLandmarks) {
			window.drawConnectors(
				ctx,
				results.poseLandmarks,
				window.POSE_CONNECTIONS,
				{
					color: "#979797ff",
					lineWidth: 3,
				}
			);
			window.drawLandmarks(ctx, results.poseLandmarks, {
				color: "#3c3c3cff",
				lineWidth: 2,
			});

			const lm = results.poseLandmarks;
			const leftKneeAngle = calcAngle(lm[23], lm[25], lm[27]);
			const rightKneeAngle = calcAngle(lm[24], lm[26], lm[28]);

			let kneeAngle = Math.max(leftKneeAngle, rightKneeAngle);
			kneeAngle = Math.min(kneeAngle, 360 - kneeAngle);

			ctx.fillStyle = "white";
			ctx.font = "18px Arial";
			ctx.fillText(`Knee Angle: ${kneeAngle.toFixed(0)}`, 10, 30);

			if (kneeAngle < 90 && !imageCapturedRef.current) {
				imageCapturedRef.current = true;

				const imageData = canvasElement.toDataURL("image/jpeg");
				setCapturedImage(imageData);
				sendToBackend(imageData);
			}
		}

		ctx.restore();
	};
}
