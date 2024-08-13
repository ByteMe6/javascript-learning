function createStyles(imageUrl) {
  const style = document.createElement("style");
  style.textContent = `
  .ios-style-toast {
   overflow: visible !important;
  }
  .ios-style-toast::before {
   content: '';
   display: inline-block;
   width: 30px;
   height: 30px;

   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   margin-right: 10px;
   flex-shrink: 0;
  }
  .ios-style-toast .toast-content {
   flex-grow: 1;
   text-align: left;
   display: flex;
   justify-content: center;
   align-items: center;
  }
 `;
  document.head.appendChild(style);
}

// Функция для создания Toast
function createToast(text, duration, imageUrl) {
  createStyles(imageUrl);
  return Toastify({
    text: text,
    duration: duration,
    close: false,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    className: "ios-style-toast",
    style: {
      background: "rgba(255, 255, 255, 0.9)",
      color: "#000",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      padding: "12px 20px",
      borderRadius: "12px",
      fontSize: "16px",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      maxWidth: "300px",
      width: "90%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60px",
    },
    callback: function () {
      const toasts = document.getElementsByClassName("ios-style-toast");
      if (toasts.length > 0) {
        const toast = toasts[toasts.length - 1];
        const text = toast.textContent;
        toast.textContent = "";
        const contentDiv = document.createElement("div");
        contentDiv.className = "toast-content";
        const toastContent = document.querySelector(".toast-content");
        const yesNoImg = toastContent.createElement("img");
        yesNoImg.src = imageUrl;
        contentDiv.textContent = text;
        toast.appendChild(contentDiv);
      }
    },
  });
}

// Создание и отображение первого Toast
let yesToast = createToast("You did it right!", 5000, "./yes.png");

// Создание и отображение второго Toast через небольшую задержку
let noToast = createToast("Try again!", 5000, "./no.png");
// Function to generate a random key character
function getRandomKey() {
  const allowedKeys = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const randomIndex = Math.floor(Math.random() * allowedKeys.length);
  return allowedKeys[randomIndex];
}

// Function to display instructions and listen for key presses
function startGame() {
  const generatedKey = getRandomKey();

  // Log correct key to console
  console.log("Correct Key:", generatedKey);

  // Hide instructions (assuming they're in an element with class 'instructions')
  document.querySelector(".instructions").style.display = "none";

  document.addEventListener("keydown", (event) => {
    const pressedKey = event.key.toUpperCase(); // Convert to uppercase for case-insensitive comparison
    if (pressedKey === generatedKey) {
      // Show success toast using Toastify's showToast()
      yesToast.showToast();
      setTimeout(startGame, 1000); // Start a new round after a delay
    } else {
      // Show failure toast using Toastify's showToast()
      noToast.showToast();
    }
  });
}

// Start the game after a brief delay to allow initial rendering
setTimeout(startGame, 500);
