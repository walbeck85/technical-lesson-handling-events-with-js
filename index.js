// Select the dodger element from the DOM and set initial position
const dodger = document.getElementById("dodger");
dodger.style.left = "180px";
dodger.style.top = "0px";

// Move the dodger 10px to the left, unless at the left edge
function moveDodgerLeft() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

// Move the dodger 10px to the right, stopping before reaching the edge (400px - dodger width)
function moveDodgerRight() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left < 360) {
    dodger.style.left = `${left + 10}px`;
  }
}

// Move the dodger 10px up, unless at the top edge
function moveDodgerUp() {
  const top = parseInt(dodger.style.top.replace("px", ""), 10);
  if (top > 0) {
    dodger.style.top = `${top - 10}px`;
  }
}

// Move the dodger 10px down, stopping before reaching the bottom edge (400px - dodger height)
function moveDodgerDown() {
  const top = parseInt(dodger.style.top.replace("px", ""), 10);
  if (top < 360) {
    dodger.style.top = `${top + 10}px`;
  }
}

// Listen for arrow key presses and call the appropriate movement function
document.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key);
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  } else if (event.key === "ArrowUp") {
    moveDodgerUp();
  } else if (event.key === "ArrowDown") {
    moveDodgerDown();
  }
});