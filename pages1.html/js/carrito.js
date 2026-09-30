// --- Funciones del carrito con localStorage ---
function addToCart(product, price) {
  // Recuperar carrito existente o crear uno nuevo
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product} agregado al carrito ✅`);
}

// Renderizar carrito en carrito.html
function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = cart.reduce((sum, item) => sum + item.price, 0);

  const cartDiv = document.getElementById("cart");
  const totalSpan = document.getElementById("total");

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Tu carrito está vacío 🛒</p>";
  } else {
    cartDiv.innerHTML = cart.map(item =>
      `<p>${item.product} - $${item.price}</p>`
    ).join("");
  }

  totalSpan.textContent = total;

  // Botón WhatsApp
  const btnWhatsapp = document.getElementById("btn-whatsapp");
  if (btnWhatsapp) {
    btnWhatsapp.onclick = () => {
      let message = "Hola, quiero comprar:\n" + cart.map(item =>
        `${item.product} - $${item.price}`
      ).join("\n") + `\nTotal: $${total}`;
      window.open(`https://wa.me/5492611234567?text=${encodeURIComponent(message)}`, "_blank");
    };
  }
}

// Ejecutar renderCart automáticamente en carrito.html
window.onload = () => {
  if (document.getElementById("cart")) {
    renderCart();
  }
};
