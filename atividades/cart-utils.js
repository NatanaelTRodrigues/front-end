const CART_KEY = "abs_cart_v1";

export function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addItemToCart(item) {
  const cart = getCart();
  const cartItem = {
    ...item,
    cartId: Date.now() + Math.floor(Math.random() * 999),
  };
  cart.push(cartItem);
  saveCart(cart);
  updateHeaderCount();
  return cartItem;
}

export function removeItemFromCart(cartId) {
  const cart = getCart().filter((c) => c.cartId !== cartId);
  saveCart(cart);
  updateHeaderCount();
  return cart;
}

export function getCartTotal() {
  return getCart().reduce((s, it) => s + (it.preco || 0), 0);
}

export function updateHeaderCount() {
  const el = document.getElementById("cart-count");
  if (el) el.innerText = getCart().length;
}

// update on load
document.addEventListener("DOMContentLoaded", () => {
  updateHeaderCount();
});

export default {
  getCart,
  saveCart,
  addItemToCart,
  removeItemFromCart,
  getCartTotal,
  updateHeaderCount,
};
