
  const firebaseConfig = {
    apiKey: "AIzaSyBbDsYGD05ZrG_gL-7XX2Ji6gSiTdehVh4",
    authDomain: "wheel-spinner-1e7a2.firebaseapp.com",
    projectId: "wheel-spinner-1e7a2",
    storageBucket: "wheel-spinner-1e7a2.appspot.com",
    messagingSenderId: "611123682914",
    appId: "1:611123682914:web:c66690ce09ba1efdcc3b3b",
    measurementId: "G-QYCRGDDKT2"
  };

// app.js
firebase.initializeApp(firebaseConfig);



function production()
{

const check = firebase.database().ref("blank");
  check.once("value")
  .then((snapshot) => {
    const dbVal = snapshot.val();
    while (val != dbVal)
    var val = prompt("Enter Passcode");
  
    if(val == dbVal)
    document.getElementById("Production").style.display = "block";
  })
  .catch((error) => {
    console.error("Error", error);
  });
}

const namesList = document.getElementById("namesList");
const resultElement = document.getElementById("result");

firebase.database().ref('names').on('value', (snapshot) => {
  const namesObject = snapshot.val();
  if (namesObject && typeof namesObject === 'object') {
    console.log("ran");
    const namesArray = Object.values(namesObject);
    const namesHTML = namesArray.map((name) => `<li>${name}</li>`).join('');
    namesList.innerHTML = namesHTML;
  } else {
    namesList.innerHTML = '';
  }
});

firebase.database().ref('result').on('value', (snapshot) => {
  const result = snapshot.val();
  resultElement.textContent = result ? `Result: ${result}` : '';
});

function submitName() {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();

  if (name !== '') {
    handleSubmitName(name);
    nameInput.value = ''; // Clear the input field after submission
  }
}

function handleSubmitName(name) {
  const namesRef = firebase.database().ref('names');
  namesRef.push(name); // This will automatically generate a sequential key for the name and store it as part of the names array.
}

function clearNamesDatabase() {
  const namesRef = firebase.database().ref('names');
  const result = firebase.database().ref('result');
  result.remove()
    .then(() => {
      console.log('Names database cleared successfully.');
    })
    .catch((error) => {
      console.error('Error clearing names database:', error);
    });
  namesRef.remove()
    .then(() => {
      console.log('Names database cleared successfully.');
    })
    .catch((error) => {
      console.error('Error clearing names database:', error);
    });
}

function handleSpinWheel() {
  const namesRef = firebase.database().ref('names');
  namesRef.once('value', (snapshot) => {
    const namesObject = snapshot.val();
    if (namesObject && typeof namesObject === 'object') {
      const namesArray = Object.values(namesObject);
      if (namesArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * namesArray.length);
        const randomName = namesArray[randomIndex];
          console.log("Flashing");
          startFlashing();
          setTimeout(stopFlashing, 3000); // Adjust the time (in milliseconds) for the slowdown
      } else {
        console.log('No names found or the names array is empty.');
      }
    } else {
      console.log('Names data is not an object or is empty.');
    }
  });
}

//move logic

let flashingInterval;
let currentIndex = 0;
let isFlashing = false;

// Function to flash the names one after another
// app.js
function flashNames() {
  const namesRef = firebase.database().ref('names');
  namesRef.once('value', (snapshot) => {
    const namesObject = snapshot.val();
    if (namesObject && typeof namesObject === 'object') {
      const namesArray = Object.values(namesObject);
      if (namesArray.length > 0) {
        if (currentIndex >= namesArray.length) {
          currentIndex = 0;
        }

        const nameDisplay = document.getElementById('nameDisplay');
        nameDisplay.textContent = namesArray[currentIndex];
        currentIndex++;
      } else {
        console.log('No names found or the names array is empty.');
      }
    } else {
      console.log('Names data is not an object or is empty.');
    }
  });
}



// Function to start the flashing
function startFlashing() {
  if (!isFlashing) {
    isFlashing = true;
    flashingInterval = setInterval(flashNames, 50);
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
  firebase.database().ref('result').set(randomName);
}


