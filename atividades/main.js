import { pecas, veiculos, formatPrice, pecaTipos } from "./data.js";
import {
  addItemToCart,
  removeItemFromCart as removeItemUtil,
  getCart,
  updateHeaderCount,
} from "./cart-utils.js";

const gridPecas = document.getElementById("grid-pecas");
const gridVeiculos = document.getElementById("grid-veiculos");
const cartBtn = document.getElementById("cart-btn");
const cartDropdown = document.getElementById("cart-dropdown");
const closeCart = document.getElementById("close-cart");

function openDetailsPage(id, cat) {
  const url = `product-detail.html?id=${encodeURIComponent(id)}&cat=${encodeURIComponent(cat)}`;
  window.location.href = url;
}

function renderPecas(list) {
  gridPecas.innerHTML = "";
  list.forEach((p) => {
    const el = document.createElement("article");
    el.className = "product-card";
    el.innerHTML = `${p.promo ? '<span class="promo-badge">PROMO</span>' : ""}
      <div class="product-img-box"></div>
      <h4>${p.nome}</h4>
      <p class="current-price">${formatPrice(p.preco)}</p>
      <button class="btn-add">Comprar</button>`;
    el.onclick = () => openDetailsPage(p.id, p.cat);
    el.querySelector(".btn-add").onclick = (e) => {
      e.stopPropagation();
      addToCart(p);
    };
    // render image or emoji
    const imgBox = el.querySelector(".product-img-box");
    renderImageToBox(imgBox, p.imgs[0]);
    gridPecas.appendChild(el);
  });
}

function renderVeiculos(list) {
  gridVeiculos.innerHTML = "";
  list.forEach((v) => {
    const el = document.createElement("article");
    el.className = "product-card";
    const subtitle = v.usado
      ? `<small>Usado • ${v.km} km</small>`
      : `<small>Zero • Ano ${v.specs[2].split(":").pop().trim()}</small>`;
    el.innerHTML = `
      <div class="product-img-box"></div>
      <h4>${v.nome}</h4>
      ${subtitle}
      <p class="current-price">${formatPrice(v.preco)}</p>
      <button class="btn-add">Ver Detalhes</button>`;
    el.onclick = () => openDetailsPage(v.id, v.cat);
    el.querySelector(".btn-add").onclick = (e) => {
      e.stopPropagation();
      openDetailsPage(v.id, v.cat);
    };
    // render image or emoji
    const imgBox = el.querySelector(".product-img-box");
    renderImageToBox(imgBox, v.imgs[0]);
    gridVeiculos.appendChild(el);
  });
}

function renderImageToBox(container, imgVal) {
  if (!container) return;
  container.innerHTML = "";
  if (
    typeof imgVal === "string" &&
    /^(https?:)?\/\/.+\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i.test(imgVal)
  ) {
    const img = document.createElement("img");
    img.src = imgVal;
    img.alt = "";
    img.loading = "lazy";
    container.appendChild(img);
  } else if (typeof imgVal === "string" && /^https?:\/\//i.test(imgVal)) {
    const img = document.createElement("img");
    img.src = imgVal;
    img.alt = "";
    img.loading = "lazy";
    container.appendChild(img);
  } else {
    container.innerText = imgVal;
  }
}

function addToCart(item) {
  addItemToCart(item);
  updateCartUI();
}

function removeFromCart(cartId) {
  removeItemUtil(cartId);
  updateCartUI();
}

function updateCartUI() {
  const cart = getCart();
  const cartCount = document.getElementById("cart-count");
  const cartItemsList = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  if (cartCount) cartCount.innerText = cart.length;
  if (cartItemsList) {
    cartItemsList.innerHTML = "";
    let total = 0;
    cart.forEach((item) => {
      total += item.preco;
      const li = document.createElement("li");
      li.className = "cart-item";
      li.innerHTML = `<span>${item.nome}</span><div><strong>${formatPrice(item.preco)}</strong><button class="btn-remove">remover</button></div>`;
      li.querySelector(".btn-remove").onclick = () =>
        removeFromCart(item.cartId);
      cartItemsList.appendChild(li);
    });
    totalPrice.innerText = formatPrice(total);
  }
}

const themeToggle = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;
function loadTheme() {
  const t = localStorage.getItem("abs_theme") || "light";
  htmlEl.setAttribute("data-theme", t);
  themeToggle.querySelector(".mode-icon").textContent =
    t === "dark" ? "🌙" : "☀️";
}
function toggleTheme() {
  const cur = htmlEl.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = cur === "dark" ? "light" : "dark";
  htmlEl.setAttribute("data-theme", next);
  localStorage.setItem("abs_theme", next);
  themeToggle.querySelector(".mode-icon").textContent =
    next === "dark" ? "🌙" : "☀️";
}

const btnPromos = document.getElementById("btn-show-promos");
const btnAll = document.getElementById("btn-show-all");
const selectPecaTipo = document.getElementById("select-peca-tipo");

function populatePecaTipos() {
  if (!selectPecaTipo) return;
  selectPecaTipo.innerHTML =
    '<option value="all">Todas as peças</option>' +
    pecaTipos
      .map((pt) => `<option value="${pt.tipo}">${pt.tipo}</option>`)
      .join("");
}
if (selectPecaTipo)
  selectPecaTipo.onchange = () => {
    const v = selectPecaTipo.value;
    if (v === "all") renderPecas(pecas);
    else renderPecas(pecas.filter((p) => p.type === v));
  };

function filterVeiculos(option) {
  if (option === "all") renderVeiculos(veiculos);
  if (option === "used") renderVeiculos(veiculos.filter((v) => v.usado));
  if (option === "zero") renderVeiculos(veiculos.filter((v) => !v.usado));
}

const veicSection = document.getElementById("veiculos");
if (veicSection) {
  const block = document.createElement("div");
  block.className = "section-actions small";
  block.innerHTML = `<button class="ui-button" id="filter-cars-all">Todos</button><button class="ui-button" id="filter-cars-used">Usados</button><button class="ui-button" id="filter-cars-zero">Zero</button>`;
  veicSection.insertBefore(block, veicSection.firstChild);
  document.getElementById("filter-cars-all").onclick = () =>
    filterVeiculos("all");
  document.getElementById("filter-cars-used").onclick = () =>
    filterVeiculos("used");
  document.getElementById("filter-cars-zero").onclick = () =>
    filterVeiculos("zero");
}

btnPromos.onclick = () => renderPecas(pecas.filter((p) => p.promo));
btnAll.onclick = () => renderPecas(pecas);

if (cartBtn)
  cartBtn.onclick = () => {
    window.location.href = "cart.html";
  };
if (closeCart)
  closeCart.onclick = () => cartDropdown.classList.remove("active");

loadTheme();
themeToggle.addEventListener("click", toggleTheme);
populatePecaTipos();
renderPecas(pecas);
renderVeiculos(veiculos);
updateCartUI();
updateHeaderCount();

window._abs = { addToCart, removeFromCart, openDetailsPage };
