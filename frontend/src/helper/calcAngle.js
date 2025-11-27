export function calcAngle(a, b, c) {
	return Math.abs(
		((Math.atan2(c.y - b.y, c.x - b.x) -
			Math.atan2(a.y - b.y, a.x - b.x)) *
			180.0) /
			Math.PI
	);
}
