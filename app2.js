
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

const resultElement = document.getElementById("result");

firebase.database().ref('players').on('value', (snapshot) => {
  const namesObject = snapshot.val();
  if (namesObject && typeof namesObject === 'object') {

    const firstKey = Object.keys(namesObject)[0];
    const firstValue = namesObject[firstKey];
    if (firstValue === "The National Anthem") {
      console.log("hidden episodes");
    } 
    const namesArray = Object.values(namesObject);
    const namesHTML = namesArray.map((name) => `<li>${name}</li>`).join('');
  }
});

/* firebase.database().ref('result').on('value', (snapshot) => {
  const result = snapshot.val();
  resultElement.textContent = result ? `Result: ${result}` : '';
}); */

firebase.database().ref('randomName').on('value', (snapshot) => {
  const random = snapshot.val();
  resultElement.textContent = random ? `${random}` : '';
});

firebase.database().ref('showNames').on('value', (snapshot) => {
  const random = snapshot.val();
  console.log(random);
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
  const namesRef = firebase.database().ref('players');
  namesRef.push(name); // This will automatically generate a sequential key for the name and store it as part of the names array.
}

function clearNamesDatabase() {
  const namesRef = firebase.database().ref('names');
  const randomName = firebase.database().ref('randomName');
  const result = firebase.database().ref('resultName');
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
    randomName.remove()
    .then(() => {
      console.log('Names database cleared successfully.');
    })
    .catch((error) => {
      console.error('Error clearing names database:', error);
    });
}

function handleSpinWheel() {
  var speed = parseInt(document.getElementById('slider').value);
  const namesRef = firebase.database().ref('players');
  namesRef.once('value', (snapshot) => {
    const namesObject = snapshot.val();
    if (namesObject && typeof namesObject === 'object') {
      const namesArray = Object.values(namesObject);
      if (namesArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * namesArray.length);
        const randomName = namesArray[randomIndex];
          console.log("Flashing");
          startFlashing();
          var randTime = (Math.floor(Math.random() * (4000 - 3000 + 1)) + 3000) + speed;
          console.log(randTime);
          setTimeout(stopFlashing, randTime); // Adjust the time (in milliseconds) for the slowdown
      } else {
        console.log('No names found or the names array is empty.');
      }
    } else {
      console.log('Names data is not an object or is empty.');
    }
  });
}

//move logic
// Array of names to display
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];

let flashingInterval;
let currentIndex = 0;
let isFlashing = false;

// Function to flash the names one after another
// app.js
function flashNames() {
  const namesRef = firebase.database().ref('players');
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
        firebase.database().ref('randomName').set(nameDisplay.textContent);
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
  const nameDisplay = document.getElementById('result');
   console.log(nameDisplay.textContent);
   rigged = false;

}

  function LoadEpisodeButton() 
  {
    firebase.database().ref('showNames').set("false");
    rigged = true;
    var speed = parseInt(document.getElementById('slider').value);
    clearNamesDatabase();
    const namesRef = firebase.database().ref('players');
    for(let i = 0; i < characterArray.length; i++)
    {
    namesRef.push(characterArray[i]);
    }
  namesRef.once('value', (snapshot) => {
    const namesObject = snapshot.val();
    if (namesObject && typeof namesObject === 'object') {
      const namesArray = Object.values(namesObject);
      if (namesArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * namesArray.length);
        const randomName = namesArray[randomIndex];
          console.log("Flashing");
          startFlashing();
          var randTime = (Math.floor(Math.random() * (4000 - 3000 + 1)) + 3000) + speed;
          console.log(randTime);
          setTimeout(stopFlashing, randTime); // Adjust the time (in milliseconds) for the slowdown
      } else {
        console.log('No names found or the names array is empty.');
      }
    } else {
      console.log('Names data is not an object or is empty.');
    }
  });
  }

  var rigged = false;

  const characterArray = [
    "Cheryl Blossom",
    "Chica",
    "Edalyn Clawthorne",
    "Ian Gallagher",
    "Jeff Probst",
    "Kitty Song Covey",
    "Miranda Cosgrove",
    "Natalie Scatorccio",
    "Nida Huq",
    "Princess Peach",
    "Scrappy Doo",
    "Shamu",
    "Stiles Stilinski",
    "Taylor Lautner",
    "Topanga Lawrence"
  ];
    

  const selectElement = document.getElementById('episodeSelect');

  for (let i = 0; i < characterArray.length; i++) {
  const episodeTitle = characterArray[i];
  const optionElement = document.createElement('option');
  optionElement.textContent = episodeTitle;
  selectElement.appendChild(optionElement);
  }
    