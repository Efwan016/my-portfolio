// Modal Contact Us
const contactModal = document.getElementById("contactModal");

function openModal() {
    contactModal.style.display = "block";
}

function closeModal() {
    contactModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
}

// Tombol open modal
document.querySelector(".button.hire").addEventListener("click", openModal);


// Mode Day/Night
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const modeBtn = document.querySelector('.mode-toggle');
    modeBtn.textContent = document.body.classList.contains('dark-mode') ? "💡" : "💡";
}


// Zoom Gambar Profil
const zoomModal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const img = document.getElementById('profileImg');

img.addEventListener('click', () => {
    zoomModal.style.display = 'flex';
    modalImg.src = img.src;
});

zoomModal.addEventListener('click', () => {
    zoomModal.style.display = 'none';
});
