// Profile Picture Persistence
const profilePic = document.getElementById("profilePic");
const uploadInput = document.getElementById("profileUpload");
if (profilePic && uploadInput) {
  if (localStorage.getItem("profileImage")) {
    profilePic.src = localStorage.getItem("profileImage");
  }
  uploadInput.addEventListener("change", (e) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      profilePic.src = event.target.result;
      localStorage.setItem("profileImage", event.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  });
}

// Rating System
const stars = document.querySelectorAll(".star");
const emoji = document.getElementById("emojiFeedback");
const thankMsg = document.getElementById("thankYouMsg");
const emojis = ["😡", "😕", "😐", "😊", "🤩"];
if (stars.length > 0) {
  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      emoji.textContent = emojis[index];
      thankMsg.textContent = "Thanks for your feedback!";
      stars.forEach((s, i) => s.style.color = i <= index ? "gold" : "white");
    });
  });
}

// Contact Form Validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      e.preventDefault();
    }
  });
}

// Chatbot
function sendMessage() {
  const input = document.getElementById("chatbot-input");
  const msgBox = document.getElementById("chatbot-messages");
  if (!input.value.trim()) return;

  msgBox.innerHTML += `<div class="text-right"><span class="bg-purple-700 px-2 py-1 rounded-lg">${input.value}</span></div>`;
  setTimeout(() => {
    msgBox.innerHTML += `<div class="text-left"><span class="bg-gray-700 px-2 py-1 rounded-lg">You said: ${input.value}</span></div>`;
    msgBox.scrollTop = msgBox.scrollHeight;
  }, 600);

  input.value = "";
}

function toggleChatbot() {
  document.getElementById("chatbot-window").classList.toggle("hidden");
}
