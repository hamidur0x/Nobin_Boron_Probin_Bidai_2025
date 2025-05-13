const targetDate = new Date("May 25, 2025 00:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "ইভেন্ট চলছে!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days} দিন ${hours} ঘন্টা ${minutes} মিনিট ${seconds} সেকেন্ড বাকী`;
}, 1000);
