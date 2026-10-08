let playerX = 50;
let playerY = 50;

let money = 5000;
let respect = 0;

const player = document.getElementById("player");
const moneyDisplay = document.getElementById("money");
const respectDisplay = document.getElementById("respect");
const message = document.getElementById("message");
const missionText = document.getElementById("missionText");

function updatePlayer() {
  player.style.left = playerX + "%";
  player.style.top = playerY + "%";
}

function move(direction) {
  const step = 3;

  if (direction === "up") {
    playerY -= step;
  }

  if (direction === "down") {
    playerY += step;
  }

  if (direction === "left") {
    playerX -= step;
  }

  if (direction === "right") {
    playerX += step;
  }

  // Keep player inside the game
  playerX = Math.max(5, Math.min(95, playerX));
  playerY = Math.max(10, Math.min(90, playerY));

  updatePlayer();

  message.textContent = "Exploring Ilorin... 🇳🇬";

  checkMission();
}

function checkMission() {
  // Naija Shop is around the upper-right area
  if (playerX > 75 && playerY < 40) {
    missionText.textContent = "You reached the Naija Shop!";

    message.textContent = "Mission location reached! 🏪";
  }
}

function completeMission() {
  if (playerX > 75 && playerY < 40) {
    money += 1000;
    respect += 10;

    moneyDisplay.textContent = money;
    respectDisplay.textContent = respect;

    missionText.textContent = "Mission completed! +₦1,000";
    message.textContent = "Well done! You earned money and respect. 💰⭐";

    setTimeout(() => {
      missionText.textContent = "New mission: Explore the Market.";
    }, 2500);
  } else {
    message.textContent = "Go to the Naija Shop first! 🏪";
  }
}

// Keyboard controls for computers
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowUp" || event.key.toLowerCase() === "w") {
    move("up");
  }

  if (event.key === "ArrowDown" || event.key.toLowerCase() === "s") {
    move("down");
  }

  if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
    move("left");
  }

  if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
    move("right");
  }
});

updatePlayer();
