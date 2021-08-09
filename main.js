const width = document.querySelector(".width");
const height = document.querySelector(".height");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  tag.innerHTML = `x: ${x}, y: ${y}`;
  width.style.top = `${y}px`;
  height.style.left = `${x}px`;

  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
});
