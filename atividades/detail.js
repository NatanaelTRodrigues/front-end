import { pecas, veiculos, formatPrice } from "./data.js";
import { addItemToCart } from "./cart-utils.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const cat = params.get("cat");

const CART_KEY = "abs_cart_v1";

function findProduct(idVal, catVal) {
  const nid = Number(idVal);
  const list =
    catVal && catVal.toLowerCase().includes("performance") ? pecas : veiculos;
  return list.find((i) => i.id === nid);
}

const prod = findProduct(id, cat);
if (!prod) {
  document.getElementById("detail-root").innerHTML =
    '<div class="container"><p>Produto não encontrado. <a href="atvd-1.html">Voltar</a></p></div>';
} else {
  document.getElementById("detail-title").innerText = prod.nome;
  document.getElementById("detail-desc").innerText = prod.desc;
  document.getElementById("detail-cat").innerText = prod.cat;
  document.getElementById("detail-price").innerText = formatPrice(prod.preco);

  const mainImg = document.getElementById("main-detail-img");
  const thumbs = document.getElementById("detail-thumbs");
  // render main image (URL or emoji)
  function putMain(val) {
    mainImg.innerHTML = "";
    if (
      typeof val === "string" &&
      /^(https?:)?\/\/.+\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i.test(val)
    ) {
      const i = document.createElement("img");
      i.src = val;
      i.alt = prod.nome;
      i.loading = "eager";
      mainImg.appendChild(i);
    } else if (typeof val === "string" && /^https?:\/\//i.test(val)) {
      const i = document.createElement("img");
      i.src = val;
      i.alt = prod.nome;
      i.loading = "eager";
      mainImg.appendChild(i);
    } else {
      mainImg.innerText = val;
    }
  }
  putMain(prod.imgs[0]);
  prod.imgs.forEach((im, idx) => {
    const t = document.createElement("div");
    t.className = "thumb-item" + (idx === 0 ? " active" : "");
    // thumb content
    if (
      typeof im === "string" &&
      /^(https?:)?\/\/.+\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i.test(im)
    ) {
      const img = document.createElement("img");
      img.src = im;
      img.alt = prod.nome;
      img.loading = "lazy";
      t.appendChild(img);
    } else if (typeof im === "string" && /^https?:\/\//i.test(im)) {
      const img = document.createElement("img");
      img.src = im;
      img.alt = prod.nome;
      img.loading = "lazy";
      t.appendChild(img);
    } else {
      t.innerText = im;
    }
    t.onclick = () => {
      putMain(im);
      Array.from(thumbs.children).forEach((c) => c.classList.remove("active"));
      t.classList.add("active");
    };
    thumbs.appendChild(t);
  });

  const specsList = document.getElementById("detail-specs-list");
  specsList.innerHTML = prod.specs.map((s) => `<li>${s}</li>`).join("");

  if (prod.usado) {
    const info = document.createElement("p");
    info.innerHTML =
      `<strong>Quilometragem:</strong> ${prod.km} km` +
      (prod.defeito
        ? ` • <strong>Defeito:</strong> ${prod.defeitoDesc || "Sim"}`
        : "");
    specsList.parentElement.insertBefore(info, specsList.nextSibling);
  }

  const addBtn = document.getElementById("detail-add-btn");
  addBtn.onclick = () => {
    addBtn.disabled = true;
    addBtn.innerText = "Adicionando...";
    setTimeout(() => {
      addItemToCart(prod);
      addBtn.innerText = "Adicionado ✓";
      addBtn.disabled = false;
      setTimeout(() => (addBtn.innerText = "Adicionar ao Carrinho"), 1200);
    }, 300);
  };
}

document.getElementById("btn-back").onclick = () => window.history.back();

// wire header theme toggle and cart button (detail page)
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.onclick = () => {
      const cur =
        document.documentElement.getAttribute("data-theme") || "light";
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("abs_theme", next);
      } catch (e) {}
      const icon = themeBtn.querySelector(".mode-icon");
      if (icon) icon.innerText = next === "dark" ? "☀️" : "🌙";
    };
  }

  const cartBtn = document.getElementById("cart-btn");
  if (cartBtn) {
    cartBtn.onclick = () => (location.href = "cart.html");
  }
});
