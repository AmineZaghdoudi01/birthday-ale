/* Time message */
const msg = document.getElementById("timeMessage");
const hour = new Date().getHours();

msg.textContent =
  hour < 12 ? "Good morning, beautiful 🌞" :
  hour < 18 ? "Hope your day is as lovely as you 💕" :
              "A calm night for a shining soul ✨";

/* Letter */
const openBtn = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const closeBtn = document.querySelector(".close");

openBtn.onclick = () => {
  letter.classList.add("active");
  music.play();
  typeText();
};

closeBtn.onclick = () => letter.classList.remove("active");

/* Typing effect */
const text = `Happy Birthday, beautiful soul 💖, May your life be filled with laughter, love, and dreams that come true. Never forget how special you are, not just today, but every single day.Stay kind, stay radiant, and keep smiling ✨`;

let i = 0;
const typed = document.getElementById("typedText");

function typeText() {
  if (i < text.length) {
    typed.textContent += text.charAt(i);
    i++;
    setTimeout(typeText, 40);
  }
}

/* Music */
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = () => {
  if (music.paused) {
    music.play();
    musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause Music';
  } else {
    music.pause();
    musicBtn.innerHTML = '<i class="fa-solid fa-play"></i> Play Music';
  }
};

/* Surprise */
document.getElementById("surpriseBtn").onclick = () => {
  document.getElementById("surpriseText").textContent =
    "You are the sweetest surprise life ever gave me 💗";
};

/* White hearts */
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let hearts = Array.from({length: 40}, () => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  s: Math.random()*3 + 2
}));

function drawHearts() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "white";
  hearts.forEach(h => {
    ctx.beginPath();
    ctx.arc(h.x, h.y, h.s, 0, Math.PI*2);
    ctx.fill();
    h.y -= 0.5;
    if(h.y < 0) h.y = canvas.height;
  });
  requestAnimationFrame(drawHearts);
}
drawHearts();

