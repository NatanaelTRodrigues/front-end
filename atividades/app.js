/* app.js - Consolidated script (dados + UI + carrinho + detalhe) */
(function () {
  // ---------- DADOS (copiado de data.js) ----------
  const pecas = [
    {
      id: 1,
      type: "Turbina",
      nome: "Turbina GT-42",
      preco: 4500,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTdnaGjMwUWOXanO8I0EjUQON7djf9vXHIS8qIZLSIdgsuhPMMJozDCFQO_lMnDeMFHnKz1Eyk2URfew1P4Z5OtRzATYkKkeOe7EB6gaS3w_pM6znG08zHd",
      ],
      desc: "Projetada para competições de alto nível.",
      specs: [
        "Material: Titânio",
        "Pressão: 2.5 bar",
        "Compatibilidade: Universal",
      ],
      promo: true,
    },
    {
      id: 1101,
      type: "Turbina",
      nome: "Turbina GT-40",
      preco: 4200,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRivPSnP39RVz5VIRafeV7dpAZnCFqJQaKQPkuAbVKYCdlqxiThWdMAHCC_CV79tXM-_ZF7FgeGSVl4rqo9wI4sX_Sey2IVJRjPk-kB198ALEI-5ZBibhRLZQ",
      ],
      desc: "Turbina balanceada para uso esportivo.",
      specs: [
        "Material: Aço Inox",
        "Pressão: 2.2 bar",
        "Compatibilidade: Específica",
      ],
      promo: false,
    },
    {
      id: 1103,
      type: "Turbina",
      nome: "Turbina GT-45",
      preco: 5200,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSANU1hnn8qJaaIsMZzHcTDBtNxL0n0M3vDM-zZTrnIN8hF4eA7RJfTVQ_NReFQBZqYJ4WL4VAmFCIrqX-cPGvptbcwvN01ZFLfOF5PwAkur_ZKyS17uQUe5Q",
      ],
      desc: "Alta vazão e durabilidade.",
      specs: [
        "Material: Titânio",
        "Pressão: 3.0 bar",
        "Compatibilidade: Universal",
      ],
      promo: false,
    },
    {
      id: 1001,
      type: "Filtro",
      nome: "JDM Legends",
      preco: 359.99,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTCNWLCTfsitsHlM58vUu4yEP3g65o-lTwmtzfmdiYMrTOvJ_seidzZ7t4wl30ynWHvfVIub7Wx_UPIURb9aR0AESisw-WD3pY8KyX8kXmKOcPmAEElIoQb2w",
      ],
      desc: "Filtro de entrada leve.",
      specs: ["Algodão tratado", "Fluxo +12%", "Lavável"],
      promo: false,
    },
    {
      id: 1002,
      type: "Filtro",
      nome: "Filtro Esportivo Duplo Fluxo (generico)",
      preco: 191.99,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRfS2s8Iq2GKw0XvsZQuXcpp8DMdBDDu94B2T3vQm9VAemHhbZXrFfVeV0-cFamhwe9cu5-CIGTZwcx5n4T7Ipq9L94Nqspn5wn2NaWLRtM6bIsZ_Uy3tSURuShBkHw5u8qPMouYPE&usqp=CAc",
      ],
      desc: "Filtro esportivo com melhor filtragem.",
      specs: ["Camadas múltiplas", "Fluxo +18%", "Lavável"],
      promo: true,
    },
    {
      id: 2,
      type: "Filtro",
      nome: "spectrum Filtro Ar Esportivo Amarelo",
      preco: 34.99,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTDViDlCCXAuyGI8kCjhQTXDUtTo6JlbPNCQNW4qY2a8IAKGhaQFl5J6fyHx6K2y64uUKpGhA9aeFGUIEzaWiAVXvn2RWY1zE3-Nlw43hxgAEGCQnjSgQVbdQ",
      ],
      desc: "Filtro de alto desempenho.",
      specs: ["Algodão tratado", "Fluxo +22%", "Inclui adaptador"],
      promo: false,
    },
    {
      id: 1004,
      type: "Filtro",
      nome: "paraíso tuning Filtro de Ar Esportivo Cone Duplo",
      preco: 469.99,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQEOejya0soAfr0gzkU7fU_AKLH0vYL6bgsLx7sDCM9VIO5Vr9hcLr9nMjeOSo483xRknQKnb1N3_9H9c92KKciH-VmXzzx",
      ],
      desc: "Filtro premium para track days.",
      specs: ["Alta vazão", "Construção reforçada", "Lavável"],
      promo: false,
    },
    {
      id: 3,
      type: "Escape",
      nome: "Coletor de Escape 4-2-1",
      preco: 1249.99,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQGcbmFTOYLj1Dy6XPhQ5aIZQ738lXLj04drEFG31bnzDIBR1qEAKX7CG7lQhcAYAu6Q4S7s7lny1ClBoq2edP_LjSJHdkJ8zcdDTak26nRHomX9Na0_FbBJPdZpOlisknvjCbR6Q&usqp=CAc",
      ],
      desc: "Melhora torque em médias rotações.",
      specs: ["Aço inox", "Solda TIG", "Acabamento polido"],
      promo: true,
    },
    {
      id: 1201,
      type: "Escape",
      nome: "Downpipe Sport",
      preco: 1989.99,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR0-_UeqAob7Sw6JtwlwiiAqfBjo3VeN8roXZydskEEsq1aTvF7Tv7OxVTDOq7BlgK7D0tBZjLUkJW9Fn9iZp7FblJIkaL3_mN6yjkKu4pbEErWcdmpw01nt0DQYIw430gU8hNVgik&usqp=CAc",
      ],
      desc: "Abertura direta do turbo.",
      specs: ["Aço inox", 'Diâmetro 3"', "Catalisador esportivo opcional"],
      promo: false,
    },
    {
      id: 1202,
      type: "Escape",
      nome: "Silencioso X",
      preco: 1689.99,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSA9LfKNgMAi26PXVJyN17r5NyR3wgtx6t7gCfKOdDsK9VrmzlfutmcazTHz33x0Xv0evLcNbSDb7tnFJ5mmfbG2SEQ7PjxFRx7nlIXznxekB9h7sR1bxd497dQRX9u6bFLTYTGxtI&usqp=CAc",
      ],
      desc: "Redução de ruído com desempenho.",
      specs: ["Aço inox", "Insulação térmica", "Acabamento cromado"],
      promo: false,
    },
    {
      id: 1203,
      type: "Escape",
      nome: "Cat-Back Pro",
      preco: 2600.99,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUurtH4bj-x4HlN66wwfw8rnuLTUuGXMaK0bBTuwTcXBeaXzRjdl_TtMtfy5l6RXOtILVJ7IS-8G-C7J4K49TQ1KUItyzeyLiW-S7S9SpmFBzC1cILGWOtJms",
      ],
      desc: "Sistema completo cat-back.",
      specs: ["Aço inox", "Fluxo otimizado", "Instalação plug&play"],
      promo: false,
    },
    {
      id: 1204,
      type: "Escape",
      nome: "Headers Lightweight",
      preco: 3056.75,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZ7ogg7OqhlTevJMUDHaD5mVg_ehzFAaIeUt6o5OTSadaUanJep3bIyCFLOK23PvKUrXcEtuQewxG0CtEIe6kYPrLWlyrnBIUKxfg4r-2ro7R4ptfmKXnSUw",
      ],
      desc: "Headers leves para resposta rápida.",
      specs: ["Aço inox", "Mandrilado", "Acabamento polido"],
      promo: true,
    },
    {
      id: 4,
      type: "Intercooler",
      nome: "Intercooler FM-55",
      preco: 3980.15,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSKEIOLUS86z0jZbkfAX6gXdNXuJNdM8BDR_JjIPd8HzTVBwEk3EEGywnuVzgk39D46aFT-F6qfl2QOj2_edmZTXzsi1akfUaYFyKxPs7sp1qMmjIHwDphsoQ",
      ],
      desc: "Refrigeração eficiente para turbo.",
      specs: [
        "Core: 600x300x76mm",
        "Material: Alumínio",
        "Pressão máxima: 3 bar",
      ],
      promo: false,
    },
    {
      id: 5,
      type: "Embreagem",
      nome: "Stage 2 Sport Kit d'embrayage 240mm ",
      preco: 3573.69,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ4FYWkKqNLoVlwvX0oD5Une-O-ak4RjHtL-TqRRFsA4Wdktm1nL0pWKuvEEBoWmCbMlUVfNv0ldNsLRzO2d3-uqXTyzrldTFHQsOjNt8moTFVDVek_sHbBSg",
      ],
      desc: "Resistente para arrancadas e track days.",
      specs: ["Diâmetro: 240mm", "Material: Cerâmica", "Torque max: 620Nm"],
      promo: false,
    },
    {
      id: 2326,
      type: "Embreagem",
      nome: "Stage 3 Sport Kit d'embrayage 240mm ",
      preco: 3783.52,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQCY8l-0VDgremiQJBytBQSjOcMqUv2G0ZeX7LIcc5Zs3OzTzMDJAZjVi5Qev_6N2IUV4CzfRlT19sjl_qj1h1kZCx7rjsqvAx5vPB_EPLCxF3Jdbp4OqAk",
      ],
      desc: "Resistente para arrancadas e track days.",
      specs: ["Diâmetro: 240mm", "Material: Cerâmica", "Torque max: 620Nm"],
      promo: false,
    },
    {
      id: 6,
      type: "Barra Estabilizadora",
      nome: "Barras Estabilizadoras Pro",
      preco: 42.99,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQMLr2ksd8yBCAspzxG9m9rGtkMkG_q9omEwGuY3a65LAbVtMBCWesrgemPnUMc4PdzMksspgHlRI2rcjUADXvGx6igYy8yWbXF5XwHIpJ80Xspb_yQzo8xd7Y",
      ],
      desc: "Melhora a estabilidade em curvas.",
      specs: ["Aço reforçado", "Ajustável", "Inclui buchas de PU"],
      promo: true,
    },
    {
      id: 7,
      type: "Suspensão",
      nome: "Kit Suspensão Rosca Slim Gol G2 À G4",
      preco: 1259.99,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQLfQlBS8zvl1twjbAxn0DyoaAXrScGgV7mO3p3GQ7wPJNvj2hhh0NC_i94TFh4py7buq5ttFqm_mIgM_BUNmz9n-lWR30BIif5xdpgghxFUnS5chSje3qakRA",
      ],
      desc: "Regulável em altura e dureza.",
      specs: ["Mono-tubo", "Rebaixamento: -60mm", "Ajuste pré-carga"],
      promo: false,
    },
    {
      id: 8,
      type: "Velas",
      nome: "Jogo 8 Velas Iridium IX",
      preco: 120,
      cat: "Performance",
      imgs: [
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTyOo02UMJ4-Ng5xGRg0kqTh0qUcah8zFrUKptQrUbuswILwlBV1qBcmEpVy_QksTSHkq3RziyGQ5yXv9jlMRDxxfaKmp-dxV_aWGLbqAjZ1aFkrpWwv_A_s88BnxiBNgd9lUeAiQ&usqp=CAc",
      ],
      desc: "Ignição mais eficiente e duradoura.",
      specs: ["Iridium", "Longevidade: 80000km", "Gap: 0.8mm"],
      promo: true,
    },
  ];

  const veiculos = [
    {
      id: 101,
      nome: "Skyline R34 GT-R",
      preco: 1450000,
      cat: "Showroom",
      imgs: [
        "https://driftforu.com/cdn/shop/files/DE42585C-F31C-46AE-BCD8-1F1AB073D835.jpg?v=1753891767&width=800",
        "https://driftforu.com/cdn/shop/files/EDB7DAAD-2AC7-4C28-AB37-90C7269E0574.jpg?v=1753891767&width=800",
        "https://driftforu.com/cdn/shop/files/A335BBD3-C5C9-46CE-B40B-E8093C3DFF7F.jpg?v=1753891767&width=800",
        "https://driftforu.com/cdn/shop/files/E3F4CD9A-6B26-416C-ADF0-F36B6D1D6503.jpg?v=1753891767&width=800",
      ],
      desc: "Ícone da cultura JDM.",
      specs: ["Motor: RB26DETT", "Potência: 280cv", "Ano: 1999"],
      usado: false,
    },
    {
      id: 102,
      nome: "Mustang GT 5.0",
      preco: 580000,
      cat: "Showroom",
      imgs: [
        "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260119/ford-mustang-5.0-v8-gasolina-gt-performance-selectshift-wmimagem17284337511.jpg?s=fill&w=552&h=414&q=60",
        "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260119/ford-mustang-5.0-v8-gasolina-gt-performance-selectshift-wmimagem17284560877.jpg?s=fill&w=552&h=414&q=60",
        "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260119/ford-mustang-5.0-v8-gasolina-gt-performance-selectshift-wmimagem17285730069.jpg?s=fill&w=552&h=414&q=60",
      ],
      desc: "Muscle americano.",
      specs: ["Motor: 5.0 V8", "Potência: 550cv", "Ano: 2026"],
      usado: false,
    },
    {
      id: 103,
      nome: "Civic Type R FK8",
      preco: 355000,
      cat: "Showroom",
      imgs: [
        "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202603/20260310/hondacivic20divtecturbogasolinatypermanual-wmimagem11593835516.jpg?s=fill&w=552&h=414&q=60",
        "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202603/20260310/hondacivic20divtecturbogasolinatypermanual-wmimagem11595634434.jpg?s=fill&w=552&h=414&q=60",
        "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202603/20260310/hondacivic20divtecturbogasolinatypermanual-wmimagem12001443758.jpg?s=fill&w=552&h=414&q=60",
      ],
      desc: "Hot hatch.",
      specs: ["Motor: 2.0 Turbo", "Potência: 320cv", "Ano: 2023"],
      usado: false,
    },
    {
      id: 104,
      nome: "Polo GTS",
      preco: 125000,
      cat: "Showroom",
      imgs: [
        "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202602/20260224/volkswagenpolo14250tsigtsautomatico-wmimagem12211859438.jpg?s=fill&w=552&h=414&q=60",
        "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202602/20260224/volkswagenpolo14250tsigtsautomatico-wmimagem12212441619.jpg?s=fill&w=552&h=414&q=60",
      ],
      desc: "Compacto esportivo.",
      specs: ["Motor: 1.4 TSI", "Potência: 150cv", "Ano: 2024"],
      usado: false,
    },
    {
      id: 105,
      nome: "Golf TSI GTI",
      preco: 132000,
      cat: "Showroom",
      imgs: [
        "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202602/20260210/volkswagengolf20tsigti16vturbogasolina4pautomatico-wmimagem15342453376.jpg?s=fill&w=552&h=414&q=60",
      ],
      desc: "Tração integral.",
      specs: ["Motor: 2.0 TSI", "Potência: 300cv", "Ano: 2015"],
      usado: false,
    },
    {
      id: 201,
      nome: "Corolla XLI (Usado)",
      preco: 55000,
      cat: "Showroom",
      imgs: [
        "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202603/20260309/toyota-corolla-1.8-xli-16v-gasolina-4p-automatico-wmimagem11164317888.jpg?s=fill&w=552&h=414&q=60",
      ],
      desc: "Usado com manutenção em dia.",
      specs: ["Motor: 1.8", "Ano: 2009/2010"],
      usado: true,
      km: 122000,
      defeito: false,
    },
    {
      id: 202,
      nome: "Fiat Uno Mille (Usado)",
      preco: 18000,
      cat: "Showroom",
      imgs: [
        "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202511/20251124/fiat-uno-1-0-mpi-mille-way-economy-8v-flex-4p-manual-wmimagem17230588549.webp?s=fill&w=552&h=414&q=60",
      ],
      desc: "Carro urbano, precisa de reparos.",
      specs: ["Motor: 1.0", "Ano: 2005", "Quilometragem: 210000 km"],
      usado: true,
      km: 210000,
      defeito: true,
      defeitoDesc: "Lataria e alinhamento",
    },
    {
      id: 203,
      nome: "Kombi Clipper (Usado)",
      preco: 95000,
      cat: "Showroom",
      imgs: [
        "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202603/20260308/volkswagenkombi15luxo8vgasolina3pmanual-wmimagem2026493270.jpg?s=fill&w=552&h=414&q=60",
      ],
      desc: "Restauração parcial.",
      specs: ["Motor: 1.6", "Ano: 1986"],
      usado: true,
      km: 8000,
      defeito: false,
    },
    {
      id: 106,
      nome: "Ferrari F8 (Zero)",
      preco: 4200000,
      cat: "Showroom",
      imgs: [
        "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202603/20260305/ferrari-f8-tributo-3.9-v8-turbo-gasolina-f1dct-wmimagem12174068983.jpg?s=fill&w=552&h=414&q=60",
      ],
      desc: "Supercarro novo.",
      specs: ["Motor: V8 Twin Turbo", "Potência: 720cv", "Ano: 2024"],
      usado: false,
    },
    {
      id: 107,
      nome: "Taycan Turbo S (Zero)",
      preco: 720000,
      cat: "Showroom",
      imgs: [
        "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202603/20260304/porsche-taycan-turbo-s-eletrico-wmimagem09425148732.jpg?s=fill&w=552&h=414&q=60",
      ],
      desc: "Elétrico de alto desempenho.",
      specs: ["Motor: Elétrico", "Potência: 761cv", "Ano: 2024"],
      usado: false,
    },
  ];

  const pecaTipos = [
    { tipo: "Filtro", variantes: [] },
    { tipo: "Turbina", variantes: [] },
    { tipo: "Escape", variantes: [] },
    { tipo: "Suspensão", variantes: [] },
    { tipo: "Intercooler", variantes: [] },
    { tipo: "Embreagem", variantes: [] },
    { tipo: "Velas", variantes: [] },
    { tipo: "Barra Estabilizadora", variantes: [] },
  ];

  function formatPrice(v) {
    return `R$ ${Number(v).toLocaleString("pt-BR")}`;
  }

  // ---------- CARRINHO (localStorage) ----------
  const CART_KEY = "abs_cart_v1";
  function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  }
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
  function addItemToCart(item) {
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
  function removeItemFromCart(cartId) {
    const cart = getCart().filter((c) => c.cartId !== cartId);
    saveCart(cart);
    updateHeaderCount();
    return cart;
  }
  function getCartTotal() {
    return getCart().reduce((s, it) => s + (it.preco || 0), 0);
  }
  function updateHeaderCount() {
    const el = document.getElementById("cart-count");
    if (el) el.innerText = getCart().length;
  }

  // ---------- HELPERS de DOM ----------
  function renderImage(container, imgVal, alt = "") {
    if (!container) return;
    container.innerHTML = "";
    if (
      typeof imgVal === "string" &&
      /^(https?:)?\/\/.+\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i.test(imgVal)
    ) {
      const img = document.createElement("img");
      img.src = imgVal;
      img.alt = alt;
      img.loading = "lazy";
      container.appendChild(img);
    } else if (typeof imgVal === "string" && /^https?:\/\//i.test(imgVal)) {
      const img = document.createElement("img");
      img.src = imgVal;
      img.alt = alt;
      img.loading = "lazy";
      container.appendChild(img);
    } else {
      container.innerText = imgVal;
    }
  }

  // ---------- RENDER: PEÇAS por TIPO ----------
  function renderPecasGrouped() {
    const target = document.getElementById("pecas");
    if (!target) return;
    // clear inner content but keep section title/header area
    const gridRoot = document.createElement("div");
    gridRoot.className = "pecas-groups";
    pecaTipos.forEach((pt) => {
      const items = pecas.filter((p) => p.type === pt.tipo);
      if (!items.length) return;
      const sec = document.createElement("section");
      sec.className = "group-section";
      sec.innerHTML = `<h4 class="group-title">${pt.tipo}</h4><div class="product-grid group-grid"></div>`;
      const g = sec.querySelector(".group-grid");
      items.forEach((p) => {
        const el = document.createElement("article");
        el.className = "product-card";
        el.innerHTML = `${p.promo ? '<span class="promo-badge">PROMO</span>' : ""}<div class="product-img-box"></div><h4>${p.nome}</h4><p class="current-price">${formatPrice(p.preco)}</p><button class="btn-add">Ver Detalhes</button>`;
        const imgBox = el.querySelector(".product-img-box");
        renderImage(imgBox, p.imgs[0], p.nome);
        el.onclick = () => openDetails(p, "peca");
        el.querySelector(".btn-add").onclick = (e) => {
          e.stopPropagation();
          openDetails(p, "peca");
        };
        g.appendChild(el);
      });
      gridRoot.appendChild(sec);
    });
    // replace existing grid
    const placeholder = document.getElementById("grid-pecas");
    if (placeholder) {
      placeholder.replaceWith(gridRoot);
      gridRoot.id = "grid-pecas";
    }
  }

  // ---------- RENDER: VEÍCULOS (Novos / Usados) ----------
  function renderVeiculosGrouped() {
    const target = document.getElementById("veiculos");
    if (!target) return;
    const secNew = document.createElement("section");
    secNew.className = "group-section";
    secNew.innerHTML =
      '<h4 class="group-title">Novos</h4><div class="product-grid group-grid" id="grid-veiculos-novos"></div>';
    const secUsed = document.createElement("section");
    secUsed.className = "group-section";
    secUsed.innerHTML =
      '<h4 class="group-title">Usados</h4><div class="product-grid group-grid" id="grid-veiculos-usados"></div>';
    const newGrid = secNew.querySelector(".group-grid");
    const usedGrid = secUsed.querySelector(".group-grid");
    veiculos
      .filter((v) => !v.usado)
      .forEach((v) => {
        const el = document.createElement("article");
        el.className = "product-card";
        el.innerHTML = `<div class="product-img-box"></div><h4>${v.nome}</h4><p class="current-price">${formatPrice(v.preco)}</p><button class="btn-add">Ver Detalhes</button>`;
        renderImage(el.querySelector(".product-img-box"), v.imgs[0], v.nome);
        el.onclick = () => openDetails(v, "veiculo");
        el.querySelector(".btn-add").onclick = (e) => {
          e.stopPropagation();
          openDetails(v, "veiculo");
        };
        newGrid.appendChild(el);
      });
    veiculos
      .filter((v) => v.usado)
      .forEach((v) => {
        const el = document.createElement("article");
        el.className = "product-card";
        el.innerHTML = `<div class="product-img-box"></div><h4>${v.nome}</h4><small>Usado • ${v.km || "—"} km</small><p class="current-price">${formatPrice(v.preco)}</p><button class="btn-add">Ver Detalhes</button>`;
        renderImage(el.querySelector(".product-img-box"), v.imgs[0], v.nome);
        el.onclick = () => openDetails(v, "veiculo");
        el.querySelector(".btn-add").onclick = (e) => {
          e.stopPropagation();
          openDetails(v, "veiculo");
        };
        usedGrid.appendChild(el);
      });
    const placeholder = document.getElementById("grid-veiculos");
    if (placeholder) {
      placeholder.replaceWith(secNew);
      secNew.after(secUsed);
    }
  }

  // ---------- DETALHE (in-page) ----------
  function openDetails(item, kind) {
    const root = document.getElementById("product-detail-view");
    if (!root) return;
    root.classList.remove("hidden");
    // Scroll para baixo mostrando a seção de detalhes
    setTimeout(() => {
      root.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    document.getElementById("detail-title").innerText = item.nome;
    document.getElementById("detail-desc").innerText = item.desc || "";
    document.getElementById("detail-cat").innerText =
      kind === "peca" ? item.type || item.cat : item.usado ? "Usado" : "Novo";
    document.getElementById("detail-price").innerText = formatPrice(item.preco);
    const mainImg = document.getElementById("main-detail-img");
    const thumbs = document.getElementById("detail-thumbs");
    function putMain(val) {
      renderImage(mainImg, val, item.nome);
    }
    thumbs.innerHTML = "";
    (item.imgs || []).forEach((im, idx) => {
      const t = document.createElement("div");
      t.className = "thumb-item" + (idx === 0 ? " active" : "");
      if (typeof im === "string") {
        const img = document.createElement("img");
        img.src = im;
        img.alt = item.nome;
        img.loading = "lazy";
        t.appendChild(img);
      } else t.innerText = im;
      t.onclick = () => {
        putMain(im);
        Array.from(thumbs.children).forEach((c) =>
          c.classList.remove("active"),
        );
        t.classList.add("active");
      };
      thumbs.appendChild(t);
    });
    putMain((item.imgs && item.imgs[0]) || item.img);
    const specs = document.getElementById("detail-specs-list");
    specs.innerHTML = (item.specs || []).map((s) => `<li>${s}</li>`).join("");
    const addBtn = document.getElementById("detail-add-btn");
    addBtn.onclick = () => {
      addItemToCart({
        ...item,
        category: kind === "peca" ? item.type : item.usado ? "Usados" : "Novos",
      });
      addBtn.innerText = "Adicionado ✓";
      setTimeout(() => (addBtn.innerText = "Adicionar ao Carrinho"), 1200);
    };
  }
  window.closeDetails = function () {
    const root = document.getElementById("product-detail-view");
    if (root) root.classList.add("hidden");
  };

  // ---------- CARRINHO (página única) ----------

  // ---------- INICIALIZAÇÃO e BINDs ----------
  document.addEventListener("DOMContentLoaded", () => {
    // theme
    const saved = localStorage.getItem("abs_theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn)
      themeBtn.onclick = () => {
        const cur =
          document.documentElement.getAttribute("data-theme") || "light";
        const next = cur === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("abs_theme", next);
        const icon = themeBtn.querySelector(".mode-icon");
        if (icon) icon.innerText = next === "dark" ? "☀️" : "🌙";
      };
    // cart header btn
    const cartBtn = document.getElementById("cart-btn");
    if (cartBtn)
      cartBtn.onclick = () => {
        window.location.href = "cart.html";
      };
    // render
    renderPecasGrouped();
    renderVeiculosGrouped();
    updateHeaderCount();
  });
})();
