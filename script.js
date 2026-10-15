const colors = ["#eef2ff", "#fef3c7", "#dcfce7", "#ffe4e6", "#e0f2fe"];
let index = 0;

document.getElementById("colorButton").addEventListener("click", () => {
  index = (index + 1) % colors.length;
  document.body.style.background = colors[index];
});