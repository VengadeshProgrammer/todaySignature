function getCanvasNumericData() {
  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 80;
  const ctx = canvas.getContext("2d");

  // Draw a complex deterministic pattern
  const grad = ctx.createLinearGradient(0,0,200,80);
  grad.addColorStop(0, "#f60");
  grad.addColorStop(0.5, "#0ff");
  grad.addColorStop(1, "#609");
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,200,80);
  ctx.font = "16px Arial";
  ctx.fillStyle = "#000";
  ctx.fillText("HardwareID: VENGADESH", 10, 40);

  const base64 = canvas.toDataURL(); // Base64-encoded PNG
  const nums = Array.from(base64).map(c => c.charCodeAt(0));
  console.log("Canvas numeric array length:", nums.length);
  console.log("Sample:", nums.slice(0, 100));
  return nums;
}

const arr = getCanvasNumericData();
