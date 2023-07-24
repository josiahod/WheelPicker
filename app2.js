// Array of names to display
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];

let flashingInterval;
let currentIndex = 0;
let isFlashing = false;

// Function to flash the names one after another
function flashNames() {
  if (currentIndex >= names.length) {
    currentIndex = 0;
  }

  const nameDisplay = document.getElementById('nameDisplay');
  nameDisplay.textContent = names[currentIndex];
  currentIndex++;
}

// Function to start the flashing
function startFlashing() {
  if (!isFlashing) {
    isFlashing = true;
    flashingInterval = setInterval(flashNames, 200);
  }
}

// Function to stop the flashing and pick a random name
function stopFlashing() {
  clearInterval(flashingInterval);
  isFlashing = false;

  // Pick a random name from the array
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];

  const nameDisplay = document.getElementById('nameDisplay');
  nameDisplay.textContent = randomName;
  console.log(`The selected name is: ${randomName}`);
}

// Event listener for the start button
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
console.log("Flashing");
  startFlashing();
  setTimeout(stopFlashing, 3000); // Adjust the time (in milliseconds) for the slowdown
});
