export const loadMediaPipe = (() => {
  let loaded = false;

  return async function loadMediaPipe() {
    if (loaded) return;

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });

    await loadScript("https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js");
    await loadScript("https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js");
    await loadScript("https://cdn.jsdelivr.net/npm/@mediapipe/pose/pose.js");

    loaded = true;
  };
})();
