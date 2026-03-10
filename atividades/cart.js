/* cart.js - Gerenciar carrinho de compras */
(function () {
  const CART_KEY = "abs_cart_v1";

  // Função para formatar preço
  function formatPrice(value) {
    return `R$ ${Number(value).toLocaleString("pt-BR")}`;
  }

  // Obter carrinho do localStorage
  function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  }

  // Salvar carrinho no localStorage
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  // Remover item do carrinho
  function removeItemFromCart(cartId) {
    const cart = getCart().filter((c) => c.cartId !== cartId);
    saveCart(cart);
    renderCart();
    updateCalculations();
  }

  // Calcular total do carrinho
  function getCartTotal() {
    return getCart().reduce((sum, item) => sum + (item.preco || 0), 0);
  }

  // Atualizar contagem de itens
  function getCartItemCount() {
    return getCart().length;
  }

  // Renderizar imagem
  function renderImage(container, imgVal, alt = "") {
    if (!container) return;

    if (!imgVal) {
      container.innerHTML = "📦";
      return;
    }

    const img = document.createElement("img");
    img.src = imgVal;
    img.alt = alt;
    img.loading = "lazy";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";

    container.innerHTML = "";
    container.appendChild(img);
  }

  // Renderizar carrinho
  function renderCart() {
    const cart = getCart();
    const cartList = document.getElementById("cart-list");
    const cartEmpty = document.getElementById("cart-empty");
    const cartContent = document.getElementById("cart-content");

    if (cart.length === 0) {
      cartEmpty.style.display = "block";
      cartContent.style.display = "none";
      return;
    }

    cartEmpty.style.display = "none";
    cartContent.style.display = "block";

    cartList.innerHTML = "";

    // Agrupar por categoria
    const groups = {};
    cart.forEach((item) => {
      const category =
        item.type || item.category || (item.usado ? "Usados" : "Novos") || "Outros";
      if (!groups[category]) groups[category] = [];
      groups[category].push(item);
    });

    // Renderizar cada categoria
    Object.keys(groups).forEach((categoryName) => {
      const groupEl = document.createElement("div");
      groupEl.className = "cart-group";
      groupEl.style.marginBottom = "20px";
      groupEl.style.padding = "20px";
      groupEl.style.background = "var(--card-bg)";
      groupEl.style.borderRadius = "16px";
      groupEl.style.border = "1px solid rgba(0, 0, 0, 0.06)";

      groupEl.innerHTML = `<h3 style="margin: 0 0 18px 0; font-size: 1.2rem; color: var(--text-main);">${categoryName}</h3><ul class="cart-group-list" style="list-style: none; padding: 0; margin: 0;"></ul>`;

      const ul = groupEl.querySelector("ul");

      groups[categoryName].forEach((item) => {
        const li = document.createElement("li");
        li.className = "cart-item";
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.padding = "12px 0";
        li.style.borderBottom = "1px dashed rgba(0, 0, 0, 0.06)";
        li.style.gap = "12px";

        const leftDiv = document.createElement("div");
        leftDiv.className = "ci-left";
        leftDiv.style.display = "flex";
        leftDiv.style.gap = "12px";
        leftDiv.style.alignItems = "center";
        leftDiv.style.flex = "1";

        const thumbDiv = document.createElement("div");
        thumbDiv.className = "ci-thumb";
        thumbDiv.style.width = "80px";
        thumbDiv.style.height = "60px";
        thumbDiv.style.borderRadius = "8px";
        thumbDiv.style.overflow = "hidden";
        thumbDiv.style.backgroundColor = "#fff";
        thumbDiv.style.flexShrink = "0";

        renderImage(
          thumbDiv,
          (item.imgs && item.imgs[0]) || item.img,
          item.nome
        );

        const infoDiv = document.createElement("div");
        infoDiv.style.flex = "1";

        const nameEl = document.createElement("strong");
        nameEl.textContent = item.nome;
        nameEl.style.display = "block";
        nameEl.style.marginBottom = "4px";
        nameEl.style.color = "var(--text-main)";

        const metaEl = document.createElement("div");
        metaEl.className = "ci-meta";
        metaEl.style.fontSize = "0.85rem";
        metaEl.style.color = "var(--text-sec)";
        if (item.usado) {
          metaEl.textContent = `Usado • ${item.km || 0} km`;
        } else {
          metaEl.textContent = "Novo";
        }

        infoDiv.appendChild(nameEl);
        infoDiv.appendChild(metaEl);

        leftDiv.appendChild(thumbDiv);
        leftDiv.appendChild(infoDiv);

        const rightDiv = document.createElement("div");
        rightDiv.className = "ci-right";
        rightDiv.style.display = "flex";
        rightDiv.style.flexDirection = "column";
        rightDiv.style.alignItems = "flex-end";
        rightDiv.style.gap = "8px";
        rightDiv.style.flexShrink = "0";

        const priceEl = document.createElement("strong");
        priceEl.style.fontSize = "1.1rem";
        priceEl.style.color = "var(--text-main)";
        priceEl.textContent = formatPrice(item.preco);

        const removeBtn = document.createElement("button");
        removeBtn.className = "btn-remove";
        removeBtn.style.background = "none";
        removeBtn.style.border = "1px dashed rgba(255, 62, 62, 0.3)";
        removeBtn.style.color = "var(--accent)";
        removeBtn.style.padding = "6px 12px";
        removeBtn.style.borderRadius = "6px";
        removeBtn.style.cursor = "pointer";
        removeBtn.style.fontSize = "0.85rem";
        removeBtn.style.fontWeight = "600";
        removeBtn.style.transition = "all 0.2s ease";
        removeBtn.textContent = "Remover";

        removeBtn.onmouseover = () => {
          removeBtn.style.background = "rgba(255, 62, 62, 0.1)";
          removeBtn.style.borderColor = "rgba(255, 62, 62, 0.5)";
        };

        removeBtn.onmouseout = () => {
          removeBtn.style.background = "none";
          removeBtn.style.borderColor = "rgba(255, 62, 62, 0.3)";
        };

        removeBtn.onclick = () => {
          removeItemFromCart(item.cartId);
        };

        rightDiv.appendChild(priceEl);
        rightDiv.appendChild(removeBtn);

        li.appendChild(leftDiv);
        li.appendChild(rightDiv);

        ul.appendChild(li);
      });

      cartList.appendChild(groupEl);
    });
  }

  // Atualizar cálculos
  function updateCalculations() {
    const cart = getCart();
    const subtotal = getCartTotal();
    const itemCount = getCartItemCount();

    document.getElementById("cart-subtotal").textContent = formatPrice(subtotal);
    document.getElementById("cart-total-amount").textContent = formatPrice(subtotal);
    document.getElementById("cart-item-count").textContent = itemCount;
  }

  // Setup tema
  function setupTheme() {
    const html = document.documentElement;
    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) return;

    // Carregar tema salvo
    const savedTheme = localStorage.getItem("theme") || "light";
    html.setAttribute("data-theme", savedTheme);

    // Atualizar ícone
    const modeIcon = themeToggle.querySelector(".mode-icon");
    if (modeIcon) {
      modeIcon.textContent = savedTheme === "dark" ? "☀️" : "🌙";
    }

    // Event listener
    themeToggle.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);

      if (modeIcon) {
        modeIcon.textContent = newTheme === "dark" ? "☀️" : "🌙";
      }
    });
  }

  // Finalizar compra
  function checkout() {
    const cart = getCart();
    if (cart.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    const overlay = document.getElementById("checkout-overlay");
    const loader = overlay.querySelector(".loader");
    loader.textContent = "Processando pagamento...";
    overlay.classList.add("active");

    // Simular processamento
    setTimeout(() => {
      loader.textContent = "Pedido confirmado!";
      setTimeout(() => {
        // Limpar carrinho
        localStorage.removeItem(CART_KEY);
        
        alert("✅ Compra realizada com sucesso!\nSeu pedido foi confirmado.");
        
        // Voltar para home
        window.location.href = "atvd-1.html";
      }, 1500);
    }, 2000);
  }

  // Inicializar
  function init() {
    setupTheme();
    renderCart();
    updateCalculations();

    // Event listeners
    const checkoutBtn = document.getElementById("cart-checkout");
    const continueBtn = document.getElementById("cart-continue-btn");

    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", checkout);
    }

    if (continueBtn) {
      continueBtn.addEventListener("click", () => {
        window.location.href = "atvd-1.html";
      });
    }
  }

  // Executar quando DOM está pronto
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
