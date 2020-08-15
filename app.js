const emojis = document.querySelectorAll(".emoji");

const moveEmoji = () => {
  emojis.forEach((emoji) => {
    emoji.style.top = window.innerHeight * Math.random();
    emoji.style.left = window.innerWidth * Math.random();
  });
};

moveEmoji();
setInterval(moveEmoji, 4000);
