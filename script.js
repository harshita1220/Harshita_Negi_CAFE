// ======= Highlight Current Page Link in Navigation =======
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.style.textDecoration = "underline";
  }
});

// ======= Greeting in Console (Optional) =======
console.log("Welcome to Teddy's Treat Café ☕ Enjoy browsing!");

// ======= Optional: Scroll-to-top Button =======
window.addEventListener("scroll", () => {
  const scrollBtn = document.getElementById("scrollToTopBtn");
  if (scrollBtn) {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
// ========order.js ========
document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault(); // form reload na kare

  const name = document.getElementById("name").value;
  const item = document.getElementById("item").value;
  const quantity = document.getElementById("quantity").value;

  if (name && item && quantity) {
    document.getElementById("confirmationMessage").textContent =
      `Thanks ${name}, your order of ${quantity} ${item}(s) has been placed! 🍽`;
    
    // Reset form
    document.getElementById("orderForm").reset();
  } else {
    document.getElementById("confirmationMessage").textContent =
      "Please fill in all fields!";
    document.getElementById("confirmationMessage").style.color = "red";
  }
});