document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const buttons = document.querySelector(".buttons");
  const response = document.getElementById("response");

  // YES button: show love message
  yesBtn.addEventListener("click", () => {
    buttons.style.display = "none";
    response.innerHTML = `
      <h2>💖 Best decision ever 💕</h2>
      <p>I can’t wait ❤️</p>
    `;
  });

  // NO button: dodges when hovered
  noBtn.addEventListener("mouseenter", () => {
    const container = document.querySelector(".container");

    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });
});
