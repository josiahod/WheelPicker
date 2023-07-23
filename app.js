
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
  while (passcode != "kathy")
  var passcode = prompt("Enter Passcode");

  if(passcode == "kathy")
  document.getElementById("Production").style.display = "block";
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

function handleSpinWheel() {
  const namesRef = firebase.database().ref('names');
  namesRef.once('value', (snapshot) => {
    const namesObject = snapshot.val();
    if (namesObject && typeof namesObject === 'object') {
      const namesArray = Object.values(namesObject);
      if (namesArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * namesArray.length);
        const randomName = namesArray[randomIndex];
        console.log('Random Name:', randomName);
        firebase.database().ref('result').set(randomName);
      } else {
        console.log('No names found or the names array is empty.');
      }
    } else {
      console.log('Names data is not an object or is empty.');
    }
  });
}
