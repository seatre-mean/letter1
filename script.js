const envelope = document.getElementById("envelope");
const flap = document.getElementById("flap");
const letter = document.getElementById("letter");

let isOpen = false;

// When you click the envelope
envelope.addEventListener("click", () => {
  if (!isOpen) {
    // Open flap upwards + show letter
    flap.style.transform = "rotateX(180deg)";
    letter.style.bottom = "150px";
    isOpen = true;
  } else {
    // Close flap down + hide letter
    flap.style.transform = "rotateX(0deg)";
    letter.style.bottom = "-100%";
    isOpen = false;
  }
});

// Flying Emojis
const emojis = ["💛", "✨", "🌸", "💌", "🐻", "🌹"];
const emojiContainer = document.getElementById("emojis");

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.fontSize = 20 + Math.random() * 20 + "px";
  emojiContainer.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 6000);
}

setInterval(createEmoji, 800);
