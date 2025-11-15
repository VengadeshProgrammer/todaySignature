function getCanvasNumericData() {
  const LIMIT = 100; // return only the first 100 numbers

  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 80;
  const ctx = canvas.getContext("2d");

  // Draw a deterministic pattern
  const grad = ctx.createLinearGradient(0, 0, 200, 80);
  grad.addColorStop(0, "#f60");
  grad.addColorStop(0.5, "#0ff");
  grad.addColorStop(1, "#609");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 200, 80);
  ctx.font = "16px Arial";
  ctx.fillStyle = "#000";
  ctx.fillText("HardwareID: VENGADESH", 10, 40);

  // Convert to base64 → numeric
  const base64 = canvas.toDataURL();
  const nums = Array.from(base64).map(c => c.charCodeAt(0));

  // Return **FIRST 100 VALUES ONLY**
  return nums.slice(0, LIMIT);
 // return [100, 97, 116, 97, 58, 105, 109, 97, 103, 101, 47, 112, 110, 103, 59, 98, 97, 115, 101, 54, 52, 44, 105, 86, 66, 79, 82, 119, 48, 75, 71, 103, 111, 65, 65, 65, 65, 78, 83, 85, 104, 69, 85, 103, 65, 65, 65, 77, 103, 65, 65, 65, 66, 81, 67, 65, 89, 65, 65, 65, 66, 99, 98, 84, 113, 119, 65, 65, 65, 65, 65, 88, 78, 83, 82, 48, 73, 65, 114, 115, 52, 99, 54, 81, 65, 65, 73, 65, 66, 74, 82, 69, 70, 85, 101, 70, 55, 116, 88, 81];
}

copy(getCanvasNumericData());
