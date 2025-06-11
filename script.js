// Modal Contact Us
const contactModal = document.getElementById("contactModal");

function openContactModal() {
  contactModal.style.display = "flex";
}

function closeContactModal() {
  contactModal.style.display = "none";
}

window.addEventListener("click", function (event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
});

// Tombol open modal
document.querySelector(".button.hire").addEventListener("click", openContactModal);

// Mode Day/Night
function toggleMode() {
  document.body.classList.toggle("dark-mode");
  const modeBtn = document.querySelector(".mode-toggle");
  modeBtn.textContent = "💡"; // Simbol tetap, karena kamu minta pakai lampu
}

// Zoom Gambar Profil
const zoomModal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const img = document.getElementById("profileImg");

img.addEventListener("click", () => {
  zoomModal.style.display = "flex";
  modalImg.src = img.src;
});

zoomModal.addEventListener("click", () => {
  zoomModal.style.display = "none";
});

const formModal = document.getElementById("formModal");
function openFormModal() {
  formModal.style.display = "flex";
}
function closeFormModal() {
  formModal.style.display = "none";
}
window.addEventListener("click", function (event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  } else if (event.target == formModal) {
    formModal.style.display = "none";
  }
});
