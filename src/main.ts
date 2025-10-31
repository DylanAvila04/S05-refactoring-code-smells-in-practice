// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let c = 0;

// These constants are for button IDs and heading text
const BTN_Increase = "increment";
const count = "counter";
const header = "CMPM 121 Project";
const BTN_Decrease = "decrement";
const BTN_RESEt = "reset";
const Odd = "pink";
const Even = "lightblue";

const state = {
  count: 0,
};

function setupUI() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${header}</h1>
    <p>Counter: <span id="${count}">0</span></p>
    <button id="${BTN_Increase}">Click Me!</button>
    <button id="${BTN_Decrease}">Decrement</button>
    <button id="${BTN_RESEt}">Reset</button>
  `;
}

function updateUI() {
  const counterDisplay = document.getElementById(count);
  if (!counterDisplay) return;

  counterDisplay.textContent = String(state.count);
  document.title = "Clicked ${state.counter}";
  document.body.style.backgroundColor = state.count % 2 !== 0 ? Odd : Even;
}

function Events() {
  // Get the increment button element from the document
  const incBtn = document.getElementById(BTN_Increase);
  // Get the decrement button element from the document
  const decBtn = document.getElementById(BTN_Decrease);
  // Get the reset button element from the document
  const resetBTN = document.getElementById(BTN_RESEt);

  // Check if any element is missing, then exit the function
  if (!incBtn || !decBtn || !resetBTN) return;

  incBtn.addEventListener("click", () => {
    state.count++;
    updateUI();
  });

  decBtn.addEventListener("click", () => {
    state.count--;
    updateUI();
  });

  resetBTN.addEventListener("click", () => {
    state.count = 0;
    updateUI();
  });
}

function start() {
  // Call setup to initialize the UI
  setupUI();
  Events();
  updateUI();
}
// Start the counter app
start();
